using Microsoft.EntityFrameworkCore;

namespace TwoCentsAPI.Models
{
  public class TwoCentsAPIContext : DbContext
  {
    public TwoCentsAPIContext(DbContextOptions<TwoCentsAPIContext> options) : base(options) {}

    public DbSet<User> Users { get; set; }
    public DbSet<Job> Jobs { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<User>()
        .HasData(
          new User { UserId = 1, Username = "test", Password = "test", PasswordHash = "AQAAAAEAACcQAAAAEMMF2iEgitUOWSCaJ8bQ7iXn+vI+QB4nOo7MCBRCS6j5bDXHXLaQBX0TLz6E/IOFMA=="  }
        );
      builder.Entity<Job>()
        .HasData(
          //seed data for jobs will go here
        );
    }
  }
}