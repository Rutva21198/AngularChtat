using Microsoft.AspNetCore.Mvc;
using System.Linq;
using FBRxweb.Domain.FacebookUserDetailModule;
using FBRxweb.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace FBRxweb.Api.Controllers.FacebookUserDetailModule
{
    [ApiController]
    [Route("api/[controller]")]
	[AllowAnonymous]
	public class FacebookUserDetailsController : BaseDomainController<FacebookUserDetail, FacebookUserDetail>

    {
        public FacebookUserDetailsController(IFacebookUserDetailDomain domain):base(domain) {}

    }
}
