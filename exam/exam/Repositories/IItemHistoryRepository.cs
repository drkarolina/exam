using exam.Models;

namespace exam.Repositories
{
    public interface IItemHistoryRepository
    {
        IEnumerable<ItemHistory> GetAll();
        ItemHistory? Get(int id);
        ItemHistory Add(ItemHistory ItemHistory);
        void Remove(int id);
        bool Update(ItemHistory ItemHistory);
    }
}