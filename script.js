import { imgcard, tagcard } from "./components/card.js";


document.getElementById("search-btn").addEventListener("click",function(){
  let search=document.getElementById('search').value;
  getData(search)
})

getData()
function getData(search = "top"){
var clientId = "fbac8857f6f0770";
var requestOptions = {
  method: "GET",
  headers: {
    Authorization: `Client-ID ${clientId}`,
  },
  redirect: "follow",
};
fetch(`https://api.imgur.com/3/gallery/${search}`, requestOptions)
  .then((response) => response.json())
  .then((res) => (showImages(res.data)))
  .catch((error) => console.log("error", error));
}
showTags()
function showTags(){
fetch(`https://api.imgur.com/3/tags`)
  .then((response) => response.json())
  .then((res) => (res.data.tags.slice(0,6).forEach((a, i) => {
    document.getElementsByClassName("tags-cards")[0].innerHTML += tagcard(
      `${a.display_name}`,
      `#${a.accent}`, a.total_items
    );
  })))
}

function showImages(list) {
  console.log("List", list);
  list = list.filter((a) => a.images != undefined);
  list.forEach((a, i) => {
  
    let {title,ups, downs, views}=a
    let {link, type, height}=a.images[0]
    height =height/5
    document.getElementsByClassName("content")[0].innerHTML += imgcard(title,link, type,height,ups, downs, views);
  });
}
