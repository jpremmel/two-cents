﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TwoCentsAPI.Models;

namespace TwoCentsAPI.Migrations
{
    [DbContext(typeof(TwoCentsAPIContext))]
    [Migration("20191217182751_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("TwoCentsAPI.Models.Job", b =>
                {
                    b.Property<int>("JobId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Title");

                    b.HasKey("JobId");

                    b.ToTable("Jobs");

                    b.HasData(
                        new
                        {
                            JobId = 1,
                            Title = "Actor"
                        },
                        new
                        {
                            JobId = 2,
                            Title = "Animal Trainer"
                        },
                        new
                        {
                            JobId = 3,
                            Title = "Bartender"
                        },
                        new
                        {
                            JobId = 4,
                            Title = "Commercial Pilot"
                        },
                        new
                        {
                            JobId = 5,
                            Title = "Copy Writer"
                        },
                        new
                        {
                            JobId = 6,
                            Title = "Curator"
                        },
                        new
                        {
                            JobId = 7,
                            Title = "Dental Assistant"
                        },
                        new
                        {
                            JobId = 8,
                            Title = "Dishwashers"
                        },
                        new
                        {
                            JobId = 9,
                            Title = "Editor"
                        },
                        new
                        {
                            JobId = 10,
                            Title = "Flight Attendant"
                        },
                        new
                        {
                            JobId = 11,
                            Title = "Floral Designer"
                        },
                        new
                        {
                            JobId = 12,
                            Title = "Graphic Designer"
                        },
                        new
                        {
                            JobId = 13,
                            Title = "Industrial Engineer"
                        },
                        new
                        {
                            JobId = 14,
                            Title = "Jeweler"
                        },
                        new
                        {
                            JobId = 15,
                            Title = "Lawyer"
                        },
                        new
                        {
                            JobId = 16,
                            Title = "Librarian"
                        },
                        new
                        {
                            JobId = 17,
                            Title = "Medical Transcriptionist"
                        },
                        new
                        {
                            JobId = 18,
                            Title = "Nanny"
                        },
                        new
                        {
                            JobId = 19,
                            Title = "Neurologist"
                        },
                        new
                        {
                            JobId = 20,
                            Title = "Software Developer"
                        },
                        new
                        {
                            JobId = 21,
                            Title = "Optometrist"
                        });
                });

            modelBuilder.Entity("TwoCentsAPI.Models.JobUser", b =>
                {
                    b.Property<int>("JobUserId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("JobId");

                    b.Property<bool>("Mentor");

                    b.Property<int>("UserId");

                    b.HasKey("JobUserId");

                    b.HasIndex("JobId");

                    b.HasIndex("UserId");

                    b.ToTable("JobUsers");
                });

            modelBuilder.Entity("TwoCentsAPI.Models.MentorMenteePair", b =>
                {
                    b.Property<int>("MentorMenteePairId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("MenteeId");

                    b.Property<int>("MentorId");

                    b.Property<int?>("UserId");

                    b.HasKey("MentorMenteePairId");

                    b.HasIndex("UserId");

                    b.ToTable("MentorMenteePairs");
                });

            modelBuilder.Entity("TwoCentsAPI.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Bio");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("LinkedInUrl");

                    b.Property<string>("OtherUrl");

                    b.Property<string>("Password");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("Token");

                    b.HasKey("UserId");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            Bio = "I am the first test user. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            Email = "test@test.test",
                            FirstName = "Test",
                            LastName = "Test",
                            LinkedInUrl = "www.linkedin.com/in/test-test",
                            OtherUrl = "www.test.test",
                            Password = "test",
                            PasswordHash = "AQAAAAEAACcQAAAAEMMF2iEgitUOWSCaJ8bQ7iXn+vI+QB4nOo7MCBRCS6j5bDXHXLaQBX0TLz6E/IOFMA=="
                        });
                });

            modelBuilder.Entity("TwoCentsAPI.Models.JobUser", b =>
                {
                    b.HasOne("TwoCentsAPI.Models.Job", "Job")
                        .WithMany("Users")
                        .HasForeignKey("JobId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("TwoCentsAPI.Models.User", "User")
                        .WithMany("Jobs")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TwoCentsAPI.Models.MentorMenteePair", b =>
                {
                    b.HasOne("TwoCentsAPI.Models.User")
                        .WithMany("MatchedUsers")
                        .HasForeignKey("UserId");
                });
#pragma warning restore 612, 618
        }
    }
}
