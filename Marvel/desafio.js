document.addEventListener("DOMContentLoaded", function (event) {
   const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=30&apikey=7e99323b2679072c3e1119052f1aca13&hash=779d449f29c113e00feddbada3e680af';
   const content = document.getElementById('marvel-row');

    const getHeroes = async function (url) {
       const data = await fetch(url);
       const body = await data.json();
       const allHeroes = body.data.results;
       

    Array.from(allHeroes).forEach((herois) => {
        const div = document.createElement("div");
        const urlM = herois.urls[0].url
        
        div.classList = 'herois';
        div.innerHTML = `<a href="${urlM}" target="_blank">

    <img src="${herois.thumbnail.path}.${herois.thumbnail.extension}">
    </a>

        <h3 class="title">${herois.name}</h3>`

            content.appendChild(div);

       })
   }

   getHeroes(url);

});