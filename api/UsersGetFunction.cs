using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using JRM.Api;
using Microsoft.EntityFrameworkCore;

namespace JRM.Functions
{
    public class UsersGetFunction
    {
        private readonly JrmContext _context;

        public UsersGetFunction(JrmContext context)
        {
            _context = context;
        }

        [FunctionName("UsersGet")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = "users")] HttpRequest req,
            ILogger log)
        {
            var firstUser = await _context.Users.FirstOrDefaultAsync();
            var testEnvValue = Utils.Utils.GetEnvironmentVariable("Test_Env_Variable");

            log.LogInformation("C# HTTP trigger function processed a request.");
            return new OkObjectResult($"This endpoint should return all users - {testEnvValue}. Grabbed {firstUser.Username}");
        }
    }
}
