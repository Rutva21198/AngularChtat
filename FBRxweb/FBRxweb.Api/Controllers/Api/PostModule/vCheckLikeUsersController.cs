using Microsoft.AspNetCore.Mvc;
using System.Linq;
using FBRxweb.Domain.PostModule;
using FBRxweb.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace FBRxweb.Api.Controllers.PostModule
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class vCheckLikeUsersController : BaseDomainController<vCheckLikeUser, vCheckLikeUser>

    {
        public vCheckLikeUsersController(IvCheckLikeUserDomain domain):base(domain) {}

    }
}
