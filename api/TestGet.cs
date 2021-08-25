using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using JRM.Api;
using System.Security.Claims;
using System.Linq;
using System.Collections.Generic;

namespace JRM.Functions
{
    public static class TestGet
    {
        [FunctionName("TestGet")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "TestGet")] HttpRequest req,
            ILogger log)
        {
            var retVal = new UserInfo { Name = "🕶" };

            var principal = req.Parse();

            if(principal != null  && principal.Identity.IsAuthenticated)
            {
                retVal.Name = principal.Identity.Name;
                retVal.AuthType = principal.Identity.AuthenticationType;
                var claims = new List<UserClaim>();

                principal.Claims.ToList().ForEach(i =>
                {
                    claims.Add(new UserClaim
                    {
                        Type = i.Type,
                        Value = i.Value,
                        Issuer = i.Issuer
                    });
                });

                retVal.Claims = claims.ToArray();
            }

            return new OkObjectResult(retVal);
        }
    }

    public class UserInfo
    {
        public string Name { get; set; }
        public string AuthType { get; set; }

        public UserClaim[] Claims { get; set; }
    }

    public class UserClaim
    {
        public string Type { get; set; }
        public string Value { get; set; }
        public string Issuer { get; set; }
    }
}
