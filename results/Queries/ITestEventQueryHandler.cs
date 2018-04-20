using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Orchard.Events;
using Orchard;
using Orchard.Data;
namespace MDM.Queries
{
    /// <summary>
    /// 查询处理器
    /// </summary>
    public interface ITestEventQueryHandler : IQueryHandler
    {
        /// <summary>
        /// 根据ID查询
        /// </summary>
        /// <param name="argument"></param>
        /// <param name="result"></param>
        void ById(QueryArgument argument, QueryResult result);
    }
}