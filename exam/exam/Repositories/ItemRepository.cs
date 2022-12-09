using exam.Models;
using System.Collections.Generic;
using System.Data.Entity.Migrations;

namespace exam.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private int _nextID = 1;

        public Item Add(Item item)
        {
            if (item == null)
                throw new ArgumentNullException("Item");
            item.Item_ID = _nextID++;
            using (var db = new DBContext())
            {
                db.Items.Add(item);
                db.SaveChanges();
            }
            return item;
        }

        public Item? Get(int id)
        {
            using (var db = new DBContext())
                return db.Items.Find(id);
        }

        public IEnumerable<Item> GetAll()
        {
            List<Item> items = new List<Item>();
            using (var db = new DBContext())
                foreach (var item in db.Items)
                    items.Add(item);
            return items;
        }

        public void Remove(int id)
        {
            using (var db = new DBContext())
            {
                db.Items.Remove(db.Items.Find(id));
                db.SaveChanges();
            }
        }

        public bool Update(Item item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("Item");
            }
            using (var db = new DBContext())
            {
                Item cl = db.Items.Find(item.Item_ID);
                if (cl == null)
                    return false;
                db.Items.AddOrUpdate(item);
                db.SaveChanges();
            }
            return true;
        }
    }
}
