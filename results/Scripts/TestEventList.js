///<reference path="../../../Themes/TheAdmin/Content/scripts/TheAdmin.d.ts" />
(function () {
    $(function () {
        /**
         * @type {RecordManageTableOption | EditDialogOption}
         */
        var option = {
            title: "页面标题",
            module: "MDM",
            controller: "TestEvent",
            columns: [
    {
        title : "Id"
        , name : "Id"
    }
    ,
    {
        title : "Name"
        , name : "Name"
    }
{ title: "Name", name: "Name" }
            ],
            getEmptyRecord: function () {
                return {
RecordId : "",
Name : ""
                };
            },
            getRecordName: function (r) {
                return r.Name;
            },
            vueOptionHandler: function (opt) {
            }
        }
        $("#TestEventPage").IDSPage(option);
    });
})();