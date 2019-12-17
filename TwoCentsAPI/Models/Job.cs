using System.Collections.Generic;

namespace TwoCentsAPI.Models
{
  public class Job
  {
    public Job()
    {
      this.Users = new HashSet<JobUser>();
    }

    public int JobId { get; set; }
    public string Title { get; set; }

    public ICollection<JobUser> Users { get; }
  }
}