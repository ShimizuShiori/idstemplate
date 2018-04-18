using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Orchard;
namespace MDM.Events.Handlers
{
    public class TestEventEventHandler : ITestEventEventHandler
    {
    public void OnCreating(String name)
    {
    }
    public void OnCreated(int id,string name)
    {
    }
    public void OnDeleted(int id)
    {
    }
    }
}