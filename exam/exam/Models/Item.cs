using System.ComponentModel.DataAnnotations;

namespace exam.Models
{
    public class Item
    {
        [Key]
        public int Item_ID { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public int CreationYear { get; set; }
        public int Room { get; set; }
        public string EndDate { get; set; }
    }
}
