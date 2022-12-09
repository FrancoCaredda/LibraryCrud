using System.ComponentModel.DataAnnotations;

namespace crud_web_api.Models.Native
{
    public class Book
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public int Count { get; set; }
    }
}
