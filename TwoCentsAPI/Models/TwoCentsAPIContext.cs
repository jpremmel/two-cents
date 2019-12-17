using Microsoft.EntityFrameworkCore;

namespace TwoCentsAPI.Models
{
  public class TwoCentsAPIContext : DbContext
  {
    public TwoCentsAPIContext(DbContextOptions<TwoCentsAPIContext> options) : base(options) {}

    public DbSet<User> Users { get; set; }
    public DbSet<Job> Jobs { get; set; }
    public DbSet<MentorMenteePair> MentorMenteePairs { get; set; }
    public DbSet<JobUser> JobUsers { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<User>()
        .HasData(
          new User { UserId = 1, FirstName = "Test", LastName = "Test", Email = "test@test.test", LinkedInUrl = "www.linkedin.com/in/test-test", OtherUrl = "www.test.test", Bio = "I am the first test user. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", Password = "test", PasswordHash = "AQAAAAEAACcQAAAAEMMF2iEgitUOWSCaJ8bQ7iXn+vI+QB4nOo7MCBRCS6j5bDXHXLaQBX0TLz6E/IOFMA=="  }
        );
      builder.Entity<Job>()
        .HasData(
          new Job { JobId = 1, Title = "Actor" },
          new Job { JobId = 2, Title = "Animal Trainer" },
          new Job { JobId = 3, Title = "Bartender" },
          new Job { JobId = 4, Title = "Commercial Pilot" },
          new Job { JobId = 5, Title = "Copy Writer" },
          new Job { JobId = 6, Title = "Curator" },
          new Job { JobId = 7, Title = "Dental Assistant" },
          new Job { JobId = 8, Title = "Dishwashers"},
          new Job { JobId = 9, Title = "Editor" },
          new Job { JobId = 10, Title = "Flight Attendant" },
          new Job { JobId = 11, Title = "Floral Designer" },
          new Job { JobId = 12, Title = "Graphic Designer" },
          new Job { JobId = 13, Title = "Industrial Engineer" },
          new Job { JobId = 14, Title = "Jeweler" },
          new Job { JobId = 15, Title = "Lawyer" },
          new Job { JobId = 16, Title = "Librarian" },
          new Job { JobId = 17, Title = "Medical Transcriptionist" },
          new Job { JobId = 18, Title = "Nanny" },
          new Job { JobId = 19, Title = "Neurologist" },
          new Job { JobId = 20, Title = "Software Developer" },
          new Job { JobId = 21, Title = "Optometrist" }
        );
    }
  }
}