using System;
using MDM.Records;
using Orchard.Data;
namespace MDM.ViewModels 
{
    public class TestEventViewModel : IRecordFormViewModel<TestEventRecord>
    {
        public int RecordId{get;set;}
        public String Name {get;set;}
        public void InitByRecord(TestEventRecord record)
        {
            this.RecordId = record.Id;
            this.Name = record.Name;
        }
        public TestEventRecord ToRecord()
        {
            return new TestEventRecord()
            {
                Id = this.RecordId
                , Name = this.Name
            };
        }
    }
}