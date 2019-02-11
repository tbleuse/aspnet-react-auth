using Microsoft.EntityFrameworkCore;

namespace aspnet_react_auth.Entities
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {     
        }

        
        public DbSet<User> Users { get; set; }

    }
}