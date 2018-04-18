using IDS.Mvc;
using MDM.Records;
using MDM.Services.Managers;
using MDM.ViewModels;
using Orchard;
using System.Linq;
using System.Web.Mvc;
namespace MDM.Controllers
{
    public class TestEventController : IDSController<ITestEventManager, TestEventViewModel, TestEventRecord>
    {
        public TestEventController(IWorkContextAccessor workContextAccessor, ITestEventManager manager) : base(workContextAccessor, manager)
        {
        }
        protected override IQueryable<TestEventRecord> GetSelectExpressionByViewModel(TestEventViewModel v)
        {
            var q = this.manager.LinqExpression();
            return q;
        }
    }
}