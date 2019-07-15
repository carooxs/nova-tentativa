const privateKey = 'fc91a0fa4d2913922c6287c86fd2709e50c28fcc',
      publicKey = 'db880f293c41738b88c14a0924fcdbcb',
      content = document.getElementById('content'),
      search =document.getElementById('search');

const getConnection = () => {
      const ts = Date.now(),
            hash = md5(ts + privateKey + publicKey),
            URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

              fetch(URL)
             .then(response => response.json())
             .then(response => {
                response.data.results.forEach( elementos => {
                    imprimeHeroi(elementos);                    
                });
            })
            .catch(elementos => console.log(elementos));
};

const imprimeHeroi = elementos => {
         const image = `${elementos.thumbnail.path}/portrait_uncanny.${elementos.thumbnail.extension}`;
         const heroi = `
         <div class="heroi ed-item l-1-3 container" >
                <h3>${elementos.name}</h3>
                <div class="heroi-img"">
                    <img class="thumbnail" src="${image}">   
                    <p class="description">${elementos.description}</p>
                </div>  
         </div>      
         `;    
         content.insertAdjacentHTML('beforeend', heroi);
}
const searchHero = name => {
    const ts = Date.now(),
    hash = md5(ts + privateKey + publicKey),
    hero = encodeURIComponent (name),
    URL = `http://gateway.marvel.com/v1/public/characters?name=${hero}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    fetch(URL)
    .then(response => response.json())
    .then(response => {
        response.data.results.forEach( elementos => {
            imprimeHeroi(elementos);                    
        });

    })
    .catch(elementos => console.log(elementos));
};

search.addEventListener('keyup', elementos => {
        if(elementos.keyCode === 13) {
            console.log(elementos.target.value.trim());
            searchHero(elementos.target.value.trim());
        }

});

getConnection();

