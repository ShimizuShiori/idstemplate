using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Orchard.Events;
using Orchard;
namespace MDM.Events.Triggers
{
    public class TestEventEventTrigger : ITestEventEventTrigger
    {
        [Dependency]
        public IEventBus EventBus { get; set; }
        public void OnCreating(String name)
        {
            Dictionary<String, Object> args = new Dictionary<string, object>();
            args[nameof(name)] = name;
            this.EventBus.Notify("ITestEventEventHandler.OnCreating", args);
        }
        public void OnCreated(int id, string name)
        {
            Dictionary<String, Object> args = new Dictionary<string, object>();
            args[nameof(id)] = id;
            args[nameof(name)] = name;
            this.EventBus.Notify("ITestEventEventHandler.OnCreated", args);
        }
        public void OnDeleted(int id)
        {
            Dictionary<String, Object> args = new Dictionary<string, object>();
            args[nameof(id)] = id;
            this.EventBus.Notify("ITestEventEventHandler.OnDeleted", args);
        }
    }
}