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

// document.addEventListener("DOMContentLoaded",fullList.bind(null,list)); 
fullList(list); //initial call
searchText.addEventListener("input",filterList); 

/* loads list*/


function fullList(list){
    let create_ul=``;
     create_ul=`<ul class="list-container">`
    list.forEach(element=>{
        create_ul+=`<li class="list-item">  ${element} </li>`
        
    })
    create_ul+=`</ul>`;
    itemList.innerHTML=create_ul;
}

/* filters list based on search */

function filterList(e){
  
  let filterArray= list.filter(element=>{
       return  element.toLowerCase().includes(e.target.value.toLowerCase());
    }); 
if(filterArray.length===0) {
    let create_ul='';
    create_ul='<ul class="list-container">'
    create_ul+='<li class="list-item" id="notFound">Search Not Found</li></ul>'
    itemList.innerHTML=create_ul;
}else{
  fullList(filterArray);
}
}
