let form = document.querySelector(".search-form")
let resultShow = document.querySelector(".result-show")
let button = document.querySelector(".search")
let input = document.querySelector(".searchinput")
let audio = document.querySelector("audio")


// text value need to storage when the submit button action happen
form.addEventListener("submit", function(event) {
    event.preventDefault()

    let searchText = document.querySelector("#searchinput").value

    console.log("searchText", searchText)

    resultShow.textContent = ""

    fetch(`https://itunes.apple.com/search?term=${searchText}`)  
    .then (function (data){
        return data.json();
    })
    .then (function(json) {
        console.log(json)   
    
        for (var i = 0; i < json.results.length; i++) {
            let name = json.results[i].artistName
            let img = json.results[i].artworkUrl100
            let songName = json.results[i].trackName
            let audio2 = json.results[i].previewUrl
            let album =json.results[i].collectionName
            let release = json.results[i].releaseDate
    
            let show = `
             <div class="col-md-3">
                  <div class="card mb-4 box-shadow">
                    <img class="card-img-top" src="${img}" value= "${audio2}" alt="Card image ">
                    <div class="card-body">
                        <h3> ${name} </h3>
                        <h4> ${songName}</h4>
                        <p>${album}<p>
                        <p>${release}<p>
                        <audio controls class="audiocontrol">
                        <source value="" src="${audio2}" type="audio/mpeg"> 
                    </div>
                  </div>
            </div>
            `

            resultShow.insertAdjacentHTML("beforeEnd", show)
        }
    })
})

