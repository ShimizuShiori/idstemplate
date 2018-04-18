using System;
using MDM.Records;
using Orchard.Data;
using System.Linq;
namespace MDM.Services.Handlers
{
    public class TestEventHandler : BaseIDSHandler<TestEventRecord>, ITestEventHandler
    {
        public TestEventHandler(IRepository<TestEventRecord> repository, ITransactionManager tm) : base(repository, tm)
        {
        }
        protected override void CheckRecordForWrite(TestEventRecord record)
        {
            if(record.Name == null) record.Name = "";
            if(record.Name.Length > 128)
                throw new ArgumentOutOfRangeException("Name", "length must less then 128");
            base.CheckRecordForWrite(record);
        }
    }
}