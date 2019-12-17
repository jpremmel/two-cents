using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using TwoCentsAPI.Models;
using TwoCentsAPI.Services;

namespace TwoCentsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;
        private readonly TwoCentsAPIContext _db;

        public UsersController(IUserService userService, TwoCentsAPIContext db)
        {
            _userService = userService;
            _db = db;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] User userLoggingIn)
        {
            var user = _userService.Authenticate(userLoggingIn.Email, userLoggingIn.Password);
            if (user == null)
                return BadRequest(new { message = "Email or password is incorrect." });
            return Ok(user);
        }

        [AllowAnonymous]
        [HttpPost("create")]
        public void Create([FromBody] User newUser)
        {
            //only save hashed password in database
            var passwordHasher = new PasswordHasher<TwoCentsAPI.Models.User>();
            newUser.PasswordHash = passwordHasher.HashPassword(newUser, newUser.Password);
            newUser.Password = null;
            _db.Users.Add(newUser);
            _db.SaveChanges();
        }
    }
}
