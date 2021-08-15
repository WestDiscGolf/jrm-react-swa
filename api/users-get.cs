using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace JRM.Functions
{
    public static class users_get
    {
        [FunctionName("users_get")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = "users")] HttpRequest req,
            ILogger log)
        {
            var testEnvValue = Utils.Utils.GetEnvironmentVariable("Test_Env_Variable");

            log.LogInformation("C# HTTP trigger function processed a request.");
            return new OkObjectResult($"This endpoint should return all users - {testEnvValue}");
        }
    }
}
