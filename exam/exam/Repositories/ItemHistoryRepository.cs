using exam.Models;
using System.Data.Entity;
using System.Data.Entity.Migrations;

namespace exam.Repositories
{
    public class ItemHistoryRepository : IItemHistoryRepository
    {
        private int _nextID = 1;

        public ItemHistory Add(ItemHistory itemHistory)
        {
            if (itemHistory == null)
                throw new ArgumentNullException("ItemHistory");
            itemHistory.ItemHistory_ID = _nextID++;
            using (var db = new DBContext())
            {
                db.History.Add(itemHistory);
                db.SaveChanges();
            }
            return itemHistory;
        }

        public ItemHistory? Get(int id)
        {
            using (var db = new DBContext())
                return db.History.Include(h => h.Item).FirstOrDefault(h => h.ItemHistory_ID == id);
        }

        public IEnumerable<ItemHistory> GetAll()
        {
            using (var db = new DBContext())
                return db.History.Include(h => h.Item).ToList();
        }

        public void Remove(int id)
        {
            using (var db = new DBContext())
            {
                db.History.Remove(db.History.Find(id));
                db.SaveChanges();
            }
        }

        public bool Update(ItemHistory itemHistory)
        {
            if (itemHistory == null)
            {
                throw new ArgumentNullException("ItemHistory");
            }
            using (var db = new DBContext())
            {
                ItemHistory i = db.History.Find(itemHistory.ItemHistory_ID);
                if (i == null)
                    return false;
                db.History.AddOrUpdate(itemHistory);
                db.SaveChanges();
            }
            return true;
        }
    }
}
