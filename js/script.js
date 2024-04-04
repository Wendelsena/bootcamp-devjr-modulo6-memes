// $.getJSON("https://api.imgflip.com/get_memes", (response) => console.log(response)) >>>>>>> chamadando e consumindo o JSON (USANDO JQUERY).

// fetch("https://api.imgflip.com/get_memes")
// .then((response) => {console.log(response)}); // fazendo a mesma coisa,mas sem o jquery

$.getJSON("https://api.imgflip.com/get_memes", (response) => {

for(var meme of response.data.memes) {

    // passando ao html o stringify do objeto response (para não ficar "object object" na tela).
    document.getElementById("memes").innerHTML += // += para acumular
    
    `

            <div class="card m-auto mt-4 p-3 pt-1" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${meme.name}</h5>
                </div>
                <img src="${meme.url}" class="card-img-top shadow rounded" alt="meme2">
            </div>
        
  `;

    }

});