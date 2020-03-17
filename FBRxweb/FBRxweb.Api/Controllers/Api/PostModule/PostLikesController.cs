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
    public class PostLikesController : BaseDomainController<PostLike,PostLike>

    {
        public PostLikesController(IPostLikeDomain domain):base(domain) {}

    }
}
