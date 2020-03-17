using FBRxweb.Infrastructure.Singleton;
using FBRxweb.Models.Main;
using FBRxweb.Models.ViewModels;
using FBRxweb.UnitOfWork.Main;
using Microsoft.AspNetCore.Http;
using RxWeb.Core.Security;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace FBRxweb.Infrastructure.Security
{
    public class ApplicationTokenProvider : IApplicationTokenProvider
    {
        private ILoginUow LoginUow { get; set; }
        private UserAccessConfigInfo UserAccessConfig { get; set; }
        private IJwtTokenProvider TokenProvider { get; set; }

        private IUserClaim UserClaim { get; set; }

        private IHttpContextAccessor ContextAccessor { get; set; }

        public ApplicationTokenProvider(IJwtTokenProvider tokenProvider, UserAccessConfigInfo userAccessConfig, ILoginUow loginUow, IUserClaim userClaim, IHttpContextAccessor contextAccessor)
        {
            TokenProvider = tokenProvider;
            UserAccessConfig = userAccessConfig;
            LoginUow = loginUow;
            UserClaim = userClaim;
            ContextAccessor = contextAccessor;
        }
        public async Task<string> GetTokenAsync(FacebookUser user)
        {
            var expirationTime = user.UserID == 0 ? DateTime.UtcNow.AddDays(1) : DateTime.UtcNow.AddMinutes(30);
            var token = TokenProvider.WriteToken(new[]{
                new Claim(
                    ClaimTypes.NameIdentifier, user.UserID.ToString()),
                new Claim(ClaimTypes.Anonymous, (user.UserID == 0).ToString()),
                    new Claim(ClaimTypes.Locality,user.Email),
                    new Claim(CustomClaimTypes.TimeZone,user.MobileNo)
                    }, "Web", "User", expirationTime);
            if (user.UserID != 0) await UserAccessConfig.SaveTokenAsync(user.UserID, "web", token, LoginUow);
            this.AddCookie(user, token.Key);
            return token.Value;
        }

        public async Task<string> RefereshTokenAsync(FacebookUser user, UserConfig userConfig)
        {
            if (!string.IsNullOrEmpty(userConfig.LanguageCode))
            {
                var userRecord = await LoginUow.Repository<FacebookUser>().SingleAsync(t => t.UserID == user.UserID);
                await LoginUow.RegisterDirtyAsync<FacebookUser>(userRecord);
                await LoginUow.CommitAsync();
            }
            await UserAccessConfig.RemoveTokenAsync(user.UserID, userConfig.AudienceType, LoginUow);
            return await this.GetTokenAsync(user);
        }

        public async Task RemoveTokenAsync(UserConfig userConfig)
        {
            this.RemoveCookie();
            await UserAccessConfig.RemoveTokenAsync(UserClaim.UserId, userConfig.AudienceType, LoginUow);
        }


        private void AddCookie(FacebookUser user, string value)
        {
            var cookieName = user.UserID == 0 ? ANONYMOUS : REQUEST_IDENTITY;
            if (cookieName == REQUEST_IDENTITY && ContextAccessor.HttpContext.Request.Cookies.ContainsKey(ANONYMOUS))
                ContextAccessor.HttpContext.Response.Cookies.Delete(ANONYMOUS);
            ContextAccessor.HttpContext.Response.Cookies.Append(cookieName, value);
        }
        private void RemoveCookie() => ContextAccessor.HttpContext.Response.Cookies.Delete(REQUEST_IDENTITY);

        private const string REQUEST_IDENTITY = "request_identity";
        private const string ANONYMOUS = "anonymous";
    }

    public interface IApplicationTokenProvider
    {
        Task<string> GetTokenAsync(FacebookUser user);

        Task<string> RefereshTokenAsync(FacebookUser user, UserConfig userConfig);

        Task RemoveTokenAsync(UserConfig userConfig);
    }
}



