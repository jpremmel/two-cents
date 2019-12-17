using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TwoCentsAPI.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Jobs",
                columns: table => new
                {
                    JobId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jobs", x => x.JobId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    LinkedInUrl = table.Column<string>(nullable: true),
                    OtherUrl = table.Column<string>(nullable: true),
                    Bio = table.Column<string>(nullable: true),
                    PasswordHash = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Token = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "JobUsers",
                columns: table => new
                {
                    JobUserId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    JobId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    Mentor = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobUsers", x => x.JobUserId);
                    table.ForeignKey(
                        name: "FK_JobUsers_Jobs_JobId",
                        column: x => x.JobId,
                        principalTable: "Jobs",
                        principalColumn: "JobId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_JobUsers_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MentorMenteePairs",
                columns: table => new
                {
                    MentorMenteePairId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    MentorId = table.Column<int>(nullable: false),
                    MenteeId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MentorMenteePairs", x => x.MentorMenteePairId);
                    table.ForeignKey(
                        name: "FK_MentorMenteePairs_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Jobs",
                columns: new[] { "JobId", "Title" },
                values: new object[,]
                {
                    { 1, "Actor" },
                    { 20, "Software Developer" },
                    { 19, "Neurologist" },
                    { 18, "Nanny" },
                    { 17, "Medical Transcriptionist" },
                    { 16, "Librarian" },
                    { 15, "Lawyer" },
                    { 14, "Jeweler" },
                    { 13, "Industrial Engineer" },
                    { 12, "Graphic Designer" },
                    { 11, "Floral Designer" },
                    { 10, "Flight Attendant" },
                    { 9, "Editor" },
                    { 8, "Dishwashers" },
                    { 7, "Dental Assistant" },
                    { 6, "Curator" },
                    { 5, "Copy Writer" },
                    { 4, "Commercial Pilot" },
                    { 3, "Bartender" },
                    { 2, "Animal Trainer" },
                    { 21, "Optometrist" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Bio", "Email", "FirstName", "LastName", "LinkedInUrl", "OtherUrl", "Password", "PasswordHash", "Token" },
                values: new object[] { 1, "I am the first test user. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "test@test.test", "Test", "Test", "www.linkedin.com/in/test-test", "www.test.test", "test", "AQAAAAEAACcQAAAAEMMF2iEgitUOWSCaJ8bQ7iXn+vI+QB4nOo7MCBRCS6j5bDXHXLaQBX0TLz6E/IOFMA==", null });

            migrationBuilder.CreateIndex(
                name: "IX_JobUsers_JobId",
                table: "JobUsers",
                column: "JobId");

            migrationBuilder.CreateIndex(
                name: "IX_JobUsers_UserId",
                table: "JobUsers",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_MentorMenteePairs_UserId",
                table: "MentorMenteePairs",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "JobUsers");

            migrationBuilder.DropTable(
                name: "MentorMenteePairs");

            migrationBuilder.DropTable(
                name: "Jobs");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
