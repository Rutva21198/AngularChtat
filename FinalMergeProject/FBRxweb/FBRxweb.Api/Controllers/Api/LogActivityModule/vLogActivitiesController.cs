using Microsoft.AspNetCore.Mvc;
using System.Linq;
using FBRxweb.Domain.LogActivityModule;
using FBRxweb.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace FBRxweb.Api.Controllers.LogActivityModule
{
    [ApiController]
    [Route("api/[controller]")]
	[AllowAnonymous]
	public class vLogActivitiesController : BaseDomainController<vLogActivity, vLogActivity>

    {
        public vLogActivitiesController(IvLogActivityDomain domain):base(domain) {}

    }
}
