fetch('https://api.unsplash.com/search/photos?per_page=28&query=ceramic&client_id=E68wcm3WSx6iTVJQX-sQfOfKwkyj2pa-v2ZFtxfo5go')
.then(res => {
    return res.json();
})
.then(data => {
    console.log(data)
    makeFirstSectionImageRow(data);
});

function makeFirstSectionImageRow(data){
  console.log();
  let images = [];
  let imageId = [];
  for(i = 0; i < 28; i++){
      images[i] = document.createElement("img");
      images[i].src = data.results[i].urls.regular; 
      imageId[i] = document.getElementById(`p${i + 1}`)
      imageId[i].appendChild(images[i]);
  }
}