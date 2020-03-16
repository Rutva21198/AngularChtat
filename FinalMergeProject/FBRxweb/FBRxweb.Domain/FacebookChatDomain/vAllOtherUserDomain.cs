using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using FBRxweb.UnitOfWork.Main;
using FBRxweb.Models.Main;

namespace FBRxweb.Domain.FacebookChatModule
{
    public class vAllOtherUserDomain : IvAllOtherUserDomain
    {
        public vAllOtherUserDomain(IFacebookChatUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(vAllOtherUser parameters)
        {
            throw new NotImplementedException();
        }

        public async Task<object> GetBy(vAllOtherUser parameters)
        {
            // throw new NotImplementedException();
            return await Uow.Repository<vAllOtherUser>().FindByAsync(t => t.UserId != parameters.UserId);
        }
        

        public HashSet<string> AddValidation(vAllOtherUser entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(vAllOtherUser entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(vAllOtherUser entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(vAllOtherUser entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(vAllOtherUser parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(vAllOtherUser parameters)
        {
            throw new NotImplementedException();
        }

        public IFacebookChatUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IvAllOtherUserDomain : ICoreDomain<vAllOtherUser, vAllOtherUser> { }
}
