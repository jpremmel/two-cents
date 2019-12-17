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

        
    }
}