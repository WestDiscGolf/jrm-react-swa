using System;

namespace JRM.Functions.Utils
{
    public static class Utils
    {
        public static string GetEnvironmentVariable(string name)
        {
            return name + ": " +
                Environment.GetEnvironmentVariable(name, EnvironmentVariableTarget.Process);
        }
    }
}
