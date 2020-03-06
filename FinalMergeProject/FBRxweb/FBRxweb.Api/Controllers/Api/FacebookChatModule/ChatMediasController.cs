using Microsoft.AspNetCore.Mvc;
using System.Linq;
using FBRxweb.Domain.FacebookChatModule;
using FBRxweb.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace FBRxweb.Api.Controllers.FacebookChatModule
{
    [ApiController]
    [Route("api/[controller]")]
	[AllowAnonymous]
	public class ChatMediasController : BaseDomainController<ChatMedia, ChatMedia>

    {
        public ChatMediasController(IChatMediaDomain domain):base(domain) {}

    }
}
