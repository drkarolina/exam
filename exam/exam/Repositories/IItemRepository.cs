using exam.Models;

namespace exam.Repositories
{
    public interface IItemRepository
    {
        IEnumerable<Item> GetAll();
        Item? Get(int id);
        Item Add(Item Item);
        void Remove(int id);
        bool Update(Item Item);
    }
}
