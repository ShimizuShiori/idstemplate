# 使用方法

1. 使用VSCODE打开当前目录

2. 在VSCODE的configs中创建你生成代码的配置文件，可以复制一个已有的，修改其中的Namespace ClassName Fields等，其中FieldType是C#类型，DbType是数据库类型

3. 在VSCODE的控制台执行脚本

```cmd
node index.js configs/xxxxx.json
```

4. 等程序运行后，会自动打开生成后的目录结构，其中的sql是创建数据库的脚本文件，其它文件按需直接复制进项目即可

5. 完成后记得删掉result，否则下次生成时，所有文件都在一起了