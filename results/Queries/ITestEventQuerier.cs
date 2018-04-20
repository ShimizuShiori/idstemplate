using Orchard;
using Orchard.Events;
namespace MDM.Queries
{
    public interface ITestEventQuerier : IDependency
    {
        QueryResult ById(int id, params string[] requiredFields);
    }
}