

/* Selecting HTML file by using ID */
let run_cat = document.getElementById("run_cat")
let run_dog = document.getElementById("run_dog")
let cat_btn = document.getElementById("cat_btn")
let dog_btn = document.getElementById("dog_btn")




/* Interact with the user when CLICK */

/* When the user click on  the butoon the functions will run  */
cat_btn.addEventListener("click", getRandomCat) // getRandomCat is a function that we will write later 
dog_btn.addEventListener("click", getRandomDog)  // getRandomDog is a function that we will write later 

/* getRandomCat will bring us datas from an API by declaring a URL inside the fetch("url") */ 
function getRandomCat(){
    fetch("https://aws.random.cat/meow")  // se connect à l'api 
    .then(response => response.json()) 
    // resonse  = la response que l'api me envoie
    // resonse.json() = transformer la reponse en JSON 
    // JSON = JavaScript Object Notation 
    /* 
    [
      {
        "name": "Ahmad",
        "test": "1993" 
      }
    ] 
    */
    // cette reponse transformée en JSON devient data
    .then(data => {    // Callback function donc tout ce qu'on ecrira entre les deux {} sera effeutué en utlisant data   
        run_cat.innerHTML = `<img src="${data.file}"/>`
        console.log(data)
    })
}
function getRandomDog(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        run_dog.innerHTML = `<img src="${data.message}"/>`
        console.log(data)
    })
}