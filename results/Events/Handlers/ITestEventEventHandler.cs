using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Orchard;
using Orchard.Events;
using MDM.Events.Protocols;
namespace MDM.Events.Handlers
{
    public interface ITestEventEventHandler : ITestEventEventProtocol, IEventHandler
    {
    }
}