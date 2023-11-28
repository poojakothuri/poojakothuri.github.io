let list = [
  "Apple", "Banana", "Cabbage",
  "Apricot", "Blueberry", "Carrot",
  "Cucumber", "Cantaloupe", "Beetroot",
  "Tomatoes", "Strawberries", "Raspberries",
  "Peaches", "Grapefruits", "Fava Beans",
  "Cranberries", "Cucumber", "Guava", "Kiwi",
  "Mushrooms", "Spinach", "Yams", "Pineapple",
  "Watermelon", "Mango", "Papayas",
  "Oranges", "Potato", "Lettuce", "Bitter Gourd",
  "Peas", "Beans", "Cucumber", "Pumpkin", "Celery",
  "Asparagus", "Spinach", "Cauliflower", "Broccoli",
  "White radish", "Radish", "Cherry", "Figs", "Dragon fruits"
]


let searchText = document.querySelector(".searchbar");
let itemList = document.querySelector(".search-List");


/* creating a ul */
let create_ul = document.createElement('ul');
create_ul.className = "list-container";


/* creating list function */

function createList(listClassName, listContent) {
  let create_li = document.createElement('li');
  create_li.className = listClassName;
  let item = document.createTextNode(listContent);
  create_li.appendChild(item);
  return create_li;
}

document.addEventListener("DOMContentLoaded",fullList);//initial call


/* dynamically attaching list items*/
function fullList() {
  list.forEach(element => {
    let create_li = createList("list-item", element);
    create_ul.appendChild(create_li);
  });
  itemList.appendChild(create_ul);
}



searchText.addEventListener("input", filterItems);

/* filter items */

function filterItems(e) {

  let inputValue = e.target.value;

  let searchValue = inputValue.toLowerCase();
  let filterArray = list.filter((item) => {
    return (item.toLowerCase().includes(searchValue));
  })


  create_ul.innerHTML = '';

  if (filterArray.length === 0) {
    let create_li = createList("list-item", "Search Not Found");
    create_li.id = "notFound";
    create_ul.appendChild(create_li);
    itemList.appendChild(create_ul);
  } 
  else {
    filterArray.forEach(element => {
      let create_li = createList("list-item", element);
      create_ul.appendChild(create_li);
    });

    itemList.appendChild(create_ul);
  }

}