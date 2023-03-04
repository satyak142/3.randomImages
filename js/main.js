
document.querySelector('button').addEventListener('click',changeQuote);

const imageElem = document.querySelector('#image');
const authorElem = document.querySelector('#author');

function changeQuote(){
  const index = Math.floor(Math.random()*photos.length);
  imageElem.innerHTML = `<img class="img-fluid"  src="${photos[index].download_url}" alt="">`
  authorElem.textContent = photos[index].author;
  
};

let photos = [];
fetch("https://picsum.photos/v2/list?page=1&limit=100")
  .then(response => response.json()) // Parse the JSON data
  .then(data => {
    photos.push(...data)
  })
  .catch(error => {
    console.error(error);
  });
