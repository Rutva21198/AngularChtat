using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using FBRxweb.Infrastructure.Security;
using FBRxweb.Models.Main;
using FBRxweb.Models.ViewModels;
using FBRxweb.UnitOfWork.Main;
using RxWeb.Core.Security.Cryptography;
using System;
using System.Linq;
using System.Threading.Tasks;
using RxWeb.Core.Security.Filters;

namespace FBRxweb.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private ILoginUow LoginUow { get; set; }
        private IApplicationTokenProvider ApplicationTokenProvider { get; set; }
        private IPasswordHash PasswordHash { get; set; }

        public AuthenticationController(ILoginUow loginUow, IApplicationTokenProvider tokenProvider, IPasswordHash passwordHash)
        {
            this.LoginUow = loginUow;
            ApplicationTokenProvider = tokenProvider;
            PasswordHash = passwordHash;
        }

        [HttpGet]
        [AllowAnonymous]
        [AllowRequest(MaxRequestCountPerIp = 100)]
        public async Task<IActionResult> Get()
        {
            var token = await ApplicationTokenProvider.GetTokenAsync(new FacebookUser { UserID = 0});
            return Ok(token);
        }

        [HttpPost]
        //[AllowAnonymousUser]
        [AllowAnonymous]
        public async Task<IActionResult> Post(AuthenticationModel authentication)
        {
            var user = await LoginUow.Repository<FacebookUser>().SingleOrDefaultAsync(t => t.MobileNo == authentication.UserName);
            if (user != null && PasswordHash.VerifySignature(authentication.Password, user.Password, user.Salt))
            {
                var token = await ApplicationTokenProvider.GetTokenAsync(user);
                return Ok(token);
            }
            else
                return BadRequest();
        }
    }
}

