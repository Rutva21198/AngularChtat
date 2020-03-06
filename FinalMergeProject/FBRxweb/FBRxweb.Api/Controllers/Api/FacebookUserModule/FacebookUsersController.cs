using Microsoft.AspNetCore.Mvc;
using RxWeb.Core.AspNetCore;
using FBRxweb.Models.ViewModels;
using FBRxweb.Domain.FacebookuserModule;
using Microsoft.AspNetCore.Authorization;

namespace FBRxweb.Api.Controllers.FacebookUserModule
{
    [ApiController]
    [Route("api/[controller]")]
	[AllowAnonymous]
	public class FacebookUsersController : BaseDomainController<FacebookUserModel, FacebookUserModel>

    {
        public FacebookUsersController(IFacebookUserDomain domain):base(domain) {}

    }
}
