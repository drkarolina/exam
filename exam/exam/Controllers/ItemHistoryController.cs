using exam.DTO;
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
    [Route("item_history")]
    public class ItemHistoryController : Controller
    {
        private IItemHistoryRepository _itemHistoryRepository;
        public ItemHistoryController(IItemHistoryRepository repository)
        {
            _itemHistoryRepository = repository;
        }
        [HttpGet]
        public IEnumerable<ItemHistory> Index()
        {
            return _itemHistoryRepository.GetAll();
        }
        [HttpGet("{id}")]
        public ItemHistory Show(int id)
        {
            ItemHistory history = _itemHistoryRepository.Get(id);
            if (history == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return history;
        }
        [HttpPost]
        public ObjectResult Post(ItemHistoryDTO historyDTO)
        {
            ItemHistory history = new ItemHistory()
            {
                Username = historyDTO.Username,
                StartYear = historyDTO.StartYear,
                EndYear = historyDTO.EndYear,
                Item_ID = historyDTO.Item_ID
            };
            ItemHistory result = _itemHistoryRepository.Add(history);
            var response = this.StatusCode(201, result);

            return response;
        }
        [HttpPut]
        public void Put(int id, ItemHistoryDTO historyDTO)
        {
            ItemHistory history = new ItemHistory()
            {
                ItemHistory_ID = id,
                Username = historyDTO.Username,
                StartYear = historyDTO.StartYear,
                EndYear = historyDTO.EndYear,
                Item_ID = historyDTO.Item_ID
            };
            if (!_itemHistoryRepository.Update(history))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
        [HttpDelete]
        public void Delete(int id)
        {
            ItemHistory history = _itemHistoryRepository.Get(id);
            if (history == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            _itemHistoryRepository.Remove(id);
        }
    }
}
