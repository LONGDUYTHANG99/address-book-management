using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace address_book_backend.Models
{
    [Table("PhoneTypes")]
    public class PhoneType
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }

        //Navigation properties
        public ICollection<Phone>? Phones { get; set; }

    }
}
