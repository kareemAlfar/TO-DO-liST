const angry = document.querySelector(".icon-angry")
const button = document.querySelector("#button")
const input = document.querySelector("input")






const sec = document.getElementById("sec")
    // const textbox = document.querySelector("#textbox")



// button.addEventListener("click", (eo) => {
//     eo.preventDefault()
//     const text = ` <div class="ss">
//     <span class="icon-star icon"></span>

//     <h2> ${input.value} </h2>
//     <div>
//         <SPan class="icon-trash-o icon"></SPan>
//         <span class="tt icon-heart"></span>

//         <span class="icon-angry icon"></span>
//     </div>
//     </div>`
//     sec.innerHTML += text

// })
const heart = `<span class="tt icon-heart"></span>`
angr = `<span class="icon-angry icon"></span>`

sec.addEventListener("click", (eo) => {
    if (eo.target.className == "icon-trash-o icon") {
        eo.target.parentElement.parentElement.remove()
    } else if (eo.target.className == "icon-angry icon") {
        eo.target.classList.add("cc")
        eo.target.parentElement.parentElement
            .getElementsByClassName("tasks")[0]
            .classList.add("finish");

        eo.target.parentElement.innerHTML += heart
    } else if (eo.target.className == "tt icon-heart") {
        eo.target.classList.add("cc")
        eo.target.parentElement.parentElement
            .getElementsByClassName("tasks")[0]
            .classList.remove("finish");

        eo.target.parentElement.innerHTML += angr
    } else if (eo.target.className == "icon-star icon") {
        eo.target.classList.add("star")

        sec.prepend(eo.target.parentElement)



    } else if (eo.target.className == "icon-star icon star") {


        eo.target.classList.remove("star")


    }


})



button.addEventListener("click", (eo) => {
    eo.preventDefault()
    const text = ` <div class="ss">
    <span class="icon-star icon"></span>
    
    <h2 class="tasks"> ${input.value} </h2>
    <div>
        <SPan class="icon-trash-o icon"></SPan>
        
    
        <span class="icon-angry icon"></span>
    </div>
    </div>`
    sec.innerHTML += text
    input.value = " "
})


// heart.addEventListener("click", (eo) => {

//     eo.target.classList.add("cc")
//     eo.target.parentElement.parentElement
//         .getElementsByClassName("tasks")[0]
//         .classList.remove("finish");

//     eo.target.parentElement.innerHTML += angr
// })