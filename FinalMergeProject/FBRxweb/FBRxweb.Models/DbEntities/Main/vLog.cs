using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using FBRxweb.BoundedContext.SqlContext;
namespace FBRxweb.Models.Main
{
    [Table("vLog",Schema="dbo")]
    public partial class vLog
    {
		#region Id Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion Id Annotations

        public int Id { get; set; }


        public int UserId { get; set; }


        public int PostId { get; set; }


        public string Post { get; set; }


        public string Activity { get; set; }


        public vLog()
        {
        }
	}
}