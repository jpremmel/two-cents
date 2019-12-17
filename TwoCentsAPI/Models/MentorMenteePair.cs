namespace TwoCentsAPI.Models
{
  public class MentorMenteePair
  {
    public int MentorMenteePairId { get; set; }
    public int MentorId { get; set; }
    public int MenteeId { get; set; }

    // public virtual User Mentor { get; set; }
    // public virtual User Mentee { get; set; }
  }
}