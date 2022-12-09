using crud_web_api.Models.DTO;
using crud_web_api.Models.Native;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Core;

namespace crud_web_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        private LibraryContext _libraryContext;
        public DataController(LibraryContext libraryContext)
        {
            _libraryContext = libraryContext;
        }

        [HttpGet]
        public IActionResult GetData()
        {
            IEnumerable<BookDTO> list = _libraryContext.Books.Select(
                b => new BookDTO() { Title = b.Title, Count = b.Count }
            );

            return Ok(list);
        }

        [HttpPost]
        public IActionResult PostData([FromBody] BookDTO dto)
        {
            Book book = new Book() { Count = dto.Count, Title = dto.Title };

            _libraryContext.Add(book);
            _libraryContext.SaveChanges();

            return Ok();
        }

        [HttpPut("{title}")]
        public IActionResult PutData(string title, [FromBody] BookDTO dto)
        {
            try
            {
                var book = _libraryContext.Books.Where(x => x.Title == title).First();
                book.Title = dto.Title;
                book.Count = dto.Count;

                _libraryContext.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{title}")]
        public IActionResult DeleteData(string title)
        {
            try
            {
                _libraryContext.Books.Remove(_libraryContext.Books.First(x => x.Title == title));
                _libraryContext.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
