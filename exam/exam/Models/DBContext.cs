using System.Data.Entity;

namespace exam.Models
{
    public class DBContext : DbContext
    {
        public DbSet<Item> Items { get; set; }
        public DbSet<ItemHistory> History { get; set; }
    }
}
