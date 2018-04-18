declare interface SingleTemplateOption<T> {
    TemplatePath: string;
    Data?: T;
    OutputPath: (data: T) => string;
    BeforeWrite?: (content: string) => string;
}

declare interface EventArgInfo {
    Name: string;
    Type: string;
}

declare interface EventInfo {
    Name: string;
    Args: EventArgInfo[];
}

declare interface RecordData {
    Namespace: string;
    ClassName: string;
    SuperClassName?: string;
    Interfaces?: string[];
    Fields: FieldInfo[];
    Ingore: boolean;
    Events?: EventInfo[];
}

declare interface Config {
    Classes: RecordData[];
}

declare interface FieldInfo {
    FieldName: string;
    FieldType: string;
    DbType?: string;
}
