using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace exam.Models
{
    public class ItemHistory
    {
        [Key]
        public int ItemHistory_ID { get; set; }
        public string Username { get; set; }
        public int StartYear { get; set;}
        public int EndYear { get; set;}
        public int Item_ID { get; set; }
        [ForeignKey(nameof(Item_ID))]
        public Item Item { get; set; }
    }
}
