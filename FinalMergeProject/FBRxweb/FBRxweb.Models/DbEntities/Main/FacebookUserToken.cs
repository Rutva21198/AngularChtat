using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace FBRxweb.Models.Main
{
    public partial class FacebookUser
    {
        [NotMapped]
        public string Token { get; set; }
    }
}
