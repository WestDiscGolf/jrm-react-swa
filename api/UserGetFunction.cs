using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using JRM.Api;
using Microsoft.EntityFrameworkCore;

namespace JRM.Functions
{
    public class UserGetFunction
    {
        private readonly JrmContext _context;

        public UserGetFunction(JrmContext context)
        {
            _context = context;
        }

        [FunctionName("UserGet")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "users/{id}")] HttpRequest req,
            string id,
            ILogger log)
        {
            var user = await _context.Users.FirstOrDefaultAsync(i => i.Email == id);
            return new OkObjectResult(user);
        }
    }
}
