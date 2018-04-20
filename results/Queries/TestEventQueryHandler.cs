using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Orchard.Events;
using Orchard;
using Orchard.Data;
using MDM.Services.Managers;
using MDM.Records;
namespace MDM.Queries
{
    public class TestEventQueryHandler : ITestEventQueryHandler
    {
        [Dependency]
        public ITestEventManager Manager { get; set; }
        public void ById(QueryArgument argument, QueryResult result)
        {
            int id = argument.GetArg<int>("id", 0);
            var searchResult = this.Manager.GetById(id);
            if(searchResult == null)
                throw new RecordNotFoundException<TestEventRecord>(id);
            var row = result.NewSingleResult();
            foreach(var field in argument.RequiredFields)
            {
                row[field] = searchResult.GetType().GetProperty(field).GetValue(result, null);
            }
        }
    }
}