using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using FBRxweb.UnitOfWork.Main;
using FBRxweb.Models.Main;

namespace FBRxweb.Domain.FacebookUserWorkModule
{
    public class FacebookUserWorkDomain : IFacebookUserWorkDomain
    {
        public FacebookUserWorkDomain(IFacebookUserWorkUow uow) {
            this.Uow = uow;
        }

        public  Task<object> GetAsync(FacebookUserWork parameters)
        {
              throw new NotImplementedException();
            // return await Uow.Repository<FacebookUserWork>().AllAsync();
         
        }

        public async Task<object> GetBy(FacebookUserWork parameters)
        {
            //  throw new NotImplementedException();
            return await Uow.Repository<FacebookUserWork>().FindByAsync(m=> m.UserWorkId==parameters.UserWorkId || m.UserId == parameters.UserId);
        }

        
        public HashSet<string> AddValidation(FacebookUserWork entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(FacebookUserWork entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(FacebookUserWork entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(FacebookUserWork entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
          //  var update = await Uow.Repository<FacebookUserWork>().FindByAsync(m => m.UserWorkId == entity.UserWorkId);
          //  await Uow.RegisterDirtyAsync(update);
//await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(FacebookUserWork parameters)
        {
            return ValidationMessages;
        }

        public async Task DeleteAsync(FacebookUserWork parameters)
        {
            // throw new NotImplementedException();
            var delete= await Uow.Repository<FacebookUserWork>().FindByAsync(m => m.UserWorkId == parameters.UserWorkId);
            await Uow.RegisterDeletedAsync(delete);
            await Uow.CommitAsync();

        }

        public IFacebookUserWorkUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IFacebookUserWorkDomain : ICoreDomain<FacebookUserWork, FacebookUserWork> { }
}
