using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using FBRxweb.BoundedContext.SqlContext;
namespace FBRxweb.Models.Main
{
    [Table("vLogActivities",Schema="dbo")]
    public partial class vLogActivity
    {
		#region id Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion id Annotations

        public int id { get; set; }


        public int UserId { get; set; }


        public int PostId { get; set; }


        public string Name { get; set; }


        public string Post { get; set; }


        public string activity { get; set; }


        public vLogActivity()
        {
        }
	}
}