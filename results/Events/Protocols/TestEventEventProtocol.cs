using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace MDM.Events.Protocols
{
    public interface ITestEventEventProtocol
    {
        void OnCreating(String name);
        void OnCreated(int id, string name);
        void OnDeleted(int id);
    }
}