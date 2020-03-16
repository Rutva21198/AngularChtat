using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using FBRxweb.UnitOfWork.Main;
using FBRxweb.Models.Main;

namespace FBRxweb.Domain.LogActivityModule
{
    public class vLogActivityDomain : IvLogActivityDomain
    {
        public vLogActivityDomain(ILogActivityUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(vLogActivity parameters)
        {
            throw new NotImplementedException();
        }

        public async Task<object> GetBy(vLogActivity parameters)
        {
            // throw new NotImplementedException();
            return await Uow.Repository<vLogActivity>().FindByAsync(t => t.id == parameters.UserId);
        }
        

        public HashSet<string> AddValidation(vLogActivity entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(vLogActivity entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(vLogActivity entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(vLogActivity entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(vLogActivity parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(vLogActivity parameters)
        {
            throw new NotImplementedException();
        }

        public ILogActivityUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IvLogActivityDomain : ICoreDomain<vLogActivity, vLogActivity> { }
}
