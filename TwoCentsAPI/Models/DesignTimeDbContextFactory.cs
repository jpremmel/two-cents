using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Identity;
using System.IO;

namespace TwoCentsAPI.Models
{
  public class TwoCentsAPIContextFactory : IDesignTimeDbContextFactory<TwoCentsAPIContext>
  {
    TwoCentsAPIContext IDesignTimeDbContextFactory<TwoCentsAPIContext>.CreateDbContext(string[] args)
    {
      IConfigurationRoot configuration = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json")
        .Build();

      var builder = new DbContextOptionsBuilder<TwoCentsAPIContext>();
      var connectionString = configuration.GetConnectionString("DefaultConnection");

      builder.UseMySql(connectionString);

      return new TwoCentsAPIContext(builder.Options);
    }
  }
}