using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using FBRxweb.BoundedContext.SqlContext;
namespace FBRxweb.Models.Main
{
    [Table("vUserProfile",Schema="dbo")]
    public partial class vUserProfile
    {
		#region UserId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion UserId Annotations

        public int UserId { get; set; }


        public string FirstName { get; set; }


        public string LastName { get; set; }


        public string CurrentCity { get; set; }


        public string HomeTown { get; set; }


        public string Bio { get; set; }


        public string Relationship { get; set; }


        public string cover { get; set; }


        public string Profilephoto { get; set; }


        public vUserProfile()
        {
        }
	}
}