let tmp = require("art-template");
let fs = require("fs");
var exec = require("child_process").exec;
let os = require("os");
let path = require("path");

let fileName = process.argv[2];

if (typeof fileName !== "string") return;
if (fileName === "") return;

console.log("parse", fileName);

/**
 *
 * @param {RecordData} data
 * @returns {RecordData}
 */
function initOption(data) {
    if (typeof data.SuperClassName === "undefined") data.SuperClassName = "";
    if (typeof data.Interfaces === "undefined") data.Interfaces = [];
    var BaseList = [];
    if (data.SuperClassName !== "") BaseList.push(data.SuperClassName);
    if (data.Interfaces.length > 0) BaseList = BaseList.concat(data.Interfaces);
    data.BaseListStr = BaseList.length > 0 ? " : " + BaseList.join(",") : "";
    data.Fields.forEach(field => {
        if (typeof field.DbType !== "undefined") return;
        field.DbType = field.FieldType;
        switch (field.FieldType.toLowerCase()) {
            case "string":
                field.DbType = "nvarchar(128)";
                break;
            case "boolean":
                field.DbType = "bit";
                break;
        }
    });
    return data;
}

function createDir(dir) {
    if (fs.existsSync(dir)) return;
    if (!fs.existsSync(path.dirname(dir))) {
        createDir(path.dirname(dir));
    }
    fs.mkdirSync(dir);
    console.log("mkdir", dir);
}

function createDirs(options, data) {
    options.forEach(option => {
        option.Data = data;
        try {
            var p = option.OutputPath(data);
            createDir(path.dirname(p));
        } catch (e) {
            throw e;
        }
    });
}

/**
 *
 * @param {SingleTemplateOption<any>} data
 */
function GenerateFile(data) {
    var rlt = tmp(__dirname + "/" + data.TemplatePath + ".art", data.Data);
    var outputPath = data.OutputPath(data.Data);
    rlt = rlt
        .split(os.EOL)
        .filter(line => line.trim() !== "")
        .join(os.EOL);
    if (typeof data.BeforeWrite === "function") rlt = data.BeforeWrite(rlt);
    fs.writeFileSync(outputPath, rlt);
    console.log("file created", outputPath);
}

/**
 *
 * @param {SingleTemplateOption<RecordData>[]} options
 * @param {RecordData} data
 */
function GenerateFiles(options, data) {
    createDirs(options, data);
    options.forEach(option => {
        option.Data = data;
        try {
            GenerateFile(option);
        } catch (e) {
            throw e;
        }
    });
}

fs.readFile(fileName, "utf8", (err, data) => {
    if (err) throw err;
    /**
     * @type {Config}
     */
    let opts = JSON.parse(data);
    opts.Classes.forEach(opt => {
        if (opt.Ingore) return;
        opt = initOption(opt);

        var allFileOptions = [
            {
                TemplatePath: "templates/record",
                OutputPath: d => `./results/Records/${d.ClassName}Record.cs`
            },
            {
                TemplatePath: "templates/IHandler",
                OutputPath: d =>
                    `./results/Services/Handlers/I${d.ClassName}Handler.cs`
            },
            {
                TemplatePath: "templates/Handler",
                OutputPath: d =>
                    `./results/Services/Handlers/${d.ClassName}Handler.cs`
            },
            {
                TemplatePath: "templates/listViewModel",
                OutputPath: d =>
                    `./results/ViewModels/${d.ClassName}ViewModel.cs`
            },
            {
                TemplatePath: "templates/IManager",
                OutputPath: d =>
                    `./results/Services/Managers/I${d.ClassName}Manager.cs`
            },
            {
                TemplatePath: "templates/Manager",
                OutputPath: d =>
                    `./results/Services/Managers/${d.ClassName}Manager.cs`
            },
            {
                TemplatePath: "templates/Controller",
                OutputPath: d =>
                    `./results/Controllers/${d.ClassName}Controller.cs`
            },
            {
                TemplatePath: "templates/CreateTableSql",
                OutputPath: d =>
                    `./results/Create ${d.Namespace}_${d.ClassName}Record.sql`
            },
            {
                TemplatePath: "templates/List",
                OutputPath: d => `./results/Views/${d.ClassName}/List.cshtml`,
                BeforeWrite: str => "\uFEFF" + str
            },
            {
                TemplatePath: "templates/ListJS",
                OutputPath: d => `./results/Scripts/${d.ClassName}List.js`
            }
        ];

        if(typeof opt.Events !== "undefined"){
            allFileOptions.push({
                TemplatePath:"templates/EventBase",
                OutputPath: d => `./results/Events/Protocols/${d.ClassName}EventProtocol.cs`,
            });
            allFileOptions.push({
                TemplatePath:"templates/IEventHandler",
                OutputPath: d => `./results/Events/Handlers/I${d.ClassName}EventHandler.cs`,
            });
            allFileOptions.push({
                TemplatePath:"templates/EventHandler",
                OutputPath: d => `./results/Events/Handlers/${d.ClassName}EventHandler.cs`,
            });
            allFileOptions.push({
                TemplatePath:"templates/IEventTrigger",
                OutputPath: d => `./results/Events/Triggers/I${d.ClassName}EventTrigger.cs`,
            });
            allFileOptions.push({
                TemplatePath:"templates/EventTrigger",
                OutputPath: d => `./results/Events/Triggers/${d.ClassName}EventTrigger.cs`,
            });
        }

        GenerateFiles(allFileOptions, opt);
    });

    exec(`explorer.exe .\\results`);
});
