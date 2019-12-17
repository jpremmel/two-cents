namespace TwoCentsAPI.Models
{
  public class JobUser
  {
    public int JobUserId { get; set; }
    public int JobId { get; set; }
    public int UserId { get; set; }
    public Job Job { get; set; }
    public User User { get; set; }
    public bool Mentor { get; set; }
  }
}