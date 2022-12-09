using Microsoft.EntityFrameworkCore;

namespace crud_web_api.Models.Native
{
    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options)
            : base(options)
        {

        }

        public DbSet<Book> Books { get; set; }
    }
}
