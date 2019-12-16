using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace TwoCentsAPI.Models
{
  public class User
  {
    public User()
    {
      
    }

    public int UserId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string LinkedInUrl { get; set; }
    public string OtherUrl { get; set; }
    public string Bio { get; set; }
    public string PasswordHash { get; set; }
    public string Password { get; set; }
    public string Token { get; set; }

  }
}