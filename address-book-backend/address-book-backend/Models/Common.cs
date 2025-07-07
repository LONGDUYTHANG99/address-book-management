

using address_book_backend.Commons.Enums;

namespace address_book_backend.Models
{
    public abstract class Common
    {
        public DeleteStatus DeleteFlag { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public RecordVersion RecordVersion { get; set; }
    }
}
