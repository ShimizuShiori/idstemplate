using System;
using MDM.Records;
using Orchard.Data;
using System.Linq;
namespace MDM.Services.Handlers
{
    public interface ITestEventHandler : IIDSHandler<TestEventRecord>
    {
    }
}