using exam.Models;
using exam.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Web.Http;
using HttpDeleteAttribute = Microsoft.AspNetCore.Mvc.HttpDeleteAttribute;
using HttpGetAttribute = Microsoft.AspNetCore.Mvc.HttpGetAttribute;
using HttpPostAttribute = Microsoft.AspNetCore.Mvc.HttpPostAttribute;
using HttpPutAttribute = Microsoft.AspNetCore.Mvc.HttpPutAttribute;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace exam.Controllers
{
    [ApiController]
    [Route("item")]
    public class ItemController : Controller
    {
        private IItemRepository _itemRepository;
        public ItemController(IItemRepository repository)
        {
            _itemRepository = repository;
        }
        [HttpGet]
        public IEnumerable<Item> Index()
        {
            return _itemRepository.GetAll();
        }
        [HttpGet("{id}")]
        public Item Show(int id)
        {
            Item item = _itemRepository.Get(id);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return item;
        }
        [HttpPost]
        public ObjectResult Post(Item item)
        {
            item = _itemRepository.Add(item);
            var response = this.StatusCode(201, item);

            return response;
        }
        [HttpPut]
        public void Put(int id, Item item)
        {
            item.Item_ID = id;
            if (!_itemRepository.Update(item))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        [HttpDelete]
        public void Delete(int id)
        {
            Item item = _itemRepository.Get(id);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            _itemRepository.Remove(id);
        }
    }
}
