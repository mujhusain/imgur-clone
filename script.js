import { imgcard, tagcard } from "./components/card.js";

var clientId = "fbac8857f6f0770";
var requestOptions = {
  method: "GET",
  headers: {
    Authorization: `Client-ID ${clientId}`,
  },
  redirect: "follow",
};
var subreddit = "angry";
fetch(`https://api.imgur.com/3/gallery/top`, requestOptions)
  .then((response) => response.json())
  .then((res) => (showImages(res.data)))
  .catch((error) => console.log("error", error));

let color = ["red", "green", "blue", "pink", "teal"];
color.forEach((a, i) => {
  document.getElementsByClassName("tags-cards")[0].innerHTML += tagcard(
    `Tag No: ${i}`,
    a
  );
});

function showImages(list) {
  console.log("List", list);
  list = list.filter((a) => a.images != undefined);
  list.forEach((a, i) => {
    let url = a.images[0].link;
    document.getElementsByClassName("content")[0].innerHTML += imgcard(url);
  });
}
