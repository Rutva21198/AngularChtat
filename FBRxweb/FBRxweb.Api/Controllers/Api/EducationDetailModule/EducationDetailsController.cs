using Microsoft.AspNetCore.Mvc;
using System.Linq;
using FBRxweb.Domain.EducationDetailModule;
using FBRxweb.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace FBRxweb.Api.Controllers.EducationDetailModule
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class EducationDetailsController : BaseDomainController<EducationDetail, EducationDetail>

    {
        public EducationDetailsController(IEducationDetailDomain domain):base(domain) {}

    }
}
