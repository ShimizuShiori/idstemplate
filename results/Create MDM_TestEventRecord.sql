if exists (select * from sysobjects where type = 'u' and name = 'MDM_TestEventRecord')
    drop table [MDM_TestEventRecord]
go
create table [MDM_TestEventRecord]
(
    id int primary key identity(1,1)
    ,[Name] varchar(128)
)
go