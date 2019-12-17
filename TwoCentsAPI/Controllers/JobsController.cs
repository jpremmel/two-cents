using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using TwoCentsAPI.Models;
using TwoCentsAPI.Services;

namespace TwoCentsAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private IUserService _userService;
        private readonly TwoCentsAPIContext _db;

        public JobsController(IUserService userService, TwoCentsAPIContext db)
        {
            _userService = userService;
            _db = db;
        }

        [AllowAnonymous]
        [HttpGet]
        public ActionResult<IEnumerable<Job>> GetAllJobs()
        {
            var jobs = _db.Jobs.ToList();
            return jobs;
        }

        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<Job>> GetUserJobsInterested()
        {
            var identity = (ClaimsIdentity)User.Identity;
            var foundId = identity.FindFirst(ClaimTypes.Name).Value;
            var jobs = _db.Jobs
                .Where(j => j.Users
                    .Any(u => u.UserId.ToString() == foundId && !u.Mentor))
                .ToList();
            return jobs;
        }

        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<Job>> GetUserJobsExperienced()
        {
            var identity = (ClaimsIdentity)User.Identity;
            var foundId = identity.FindFirst(ClaimTypes.Name).Value;
            var jobs = _db.Jobs
                .Where(j => j.Users
                    .Any(u => u.UserId.ToString() == foundId && u.Mentor))
                .ToList();
            return jobs;
        }

        // [Authorize]
        // [HttpPost]
        // public ActionResult<int> Post([FromBody] string[] jobTitles)
        // {
        //     var identity = (ClaimsIdentity)User.Identity;
        //     var foundId = identity.FindFirst(ClaimTypes.Name).Value;
        //     for (int i = 0; i < jobTitles.Length; i++)
        //     {

        //     }
        // }
    }
}