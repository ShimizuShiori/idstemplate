using MDM.Records;
using MDM.Services.Handlers;
using MDM.ViewModels;
using Orchard.Data;
using System;
using System.Collections.Generic;
using System.Linq;
namespace MDM.Services.Managers
{
    public interface ITestEventManager : IBaseManager<TestEventViewModel, TestEventRecord>
    {
    }
}