using RxWeb.Core.Data;
using FBRxweb.BoundedContext.Main;

namespace FBRxweb.UnitOfWork.Main
{
    public class LogActivityUow : BaseUow, ILogActivityUow
    {
        public LogActivityUow(ILogActivityContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface ILogActivityUow : ICoreUnitOfWork { }
}


