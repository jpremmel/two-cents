namespace TwoCentsAPI.Models
{
  public class MentorMentee
  {
    public int MentorMenteeId { get; set; }
    public int MentorId { get; set; }
    public int MenteeId { get; set; }
    public User Mentor { get; set; }
    public User Mentee { get; set; }
  }
}