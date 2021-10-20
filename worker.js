addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})

const BASE = 'https://www.google.com/search?q=';

function genURL() {
const urlObject = new String(makeid(3));
const newURL = BASE.concat(urlObject); 
return newURL

}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

//console.log(makeid(3));

async function handleRequest(request) {
  const parts = request.url.split('/');
  //console.log(genURL())
  return fetch(genURL());
}
