using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
// using System.Collections.Generic;
// using System.Text;

namespace functions_csharp_entityframeworkcore
{
    public class JrmContext : DbContext
    {
        public JrmContext(DbContextOptions<JrmContext> options)
            : base(options)
        { }

        public DbSet<User> Users { get; set; }
    }

    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }

        //public ICollection<Post> Posts { get; set; }
    }

    public class JrmContextFactory : IDesignTimeDbContextFactory<JrmContext>
    {
        public JrmContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<JrmContext>();
            optionsBuilder.UseSqlServer(Environment.GetEnvironmentVariable("SqlConnectionString"));

            return new JrmContext(optionsBuilder.Options);
        }
    }
}
