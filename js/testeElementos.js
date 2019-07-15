const privateKey = 'fc91a0fa4d2913922c6287c86fd2709e50c28fcc',
      publicKey = 'db880f293c41738b88c14a0924fcdbcb',
      content = document.getElementById('content');


const getConnection = () => {
      const ts = Date.now(),
            hash = md5(ts + privateKey + publicKey),
            URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

              fetch(URL)
             .then(response => response.json())
             .then(response => {
                    console.log(response);                  
                });
            }


getConnection();