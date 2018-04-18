using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Orchard;
using MDM.Events.Protocols;
namespace MDM.Events.Triggers
{
    public interface ITestEventEventTrigger : ITestEventEventProtocol, IDependency
    {
    }
}