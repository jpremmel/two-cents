using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace TwoCentsAPI.Models
{
  public class Job
  {
    public Job()
    {

    }

    public int JobId { get; set; }
    public string Title { get; set; }
    public string Category { get; set; }

  }
}