using Orchard.Events;
using Orchard;
using System;
using System.Collections.Generic;
namespace MDM.Queries
{
    public class TestEventQuerier : ITestEventQuerier
    {
        [Dependency]
        public IQuerier Querier { get; set; }
        QueryResult ById(int id, params string[] requiredFields);
        {
            Dictionary<String, Object> args = new Dictionary<string, object>();
            args[nameof(id)] = id;
            return Querier.Query("ITestEventQueryHandler", "ById", requiredFields, args);
        }
    }
}