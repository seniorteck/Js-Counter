// select the button ;
// store the select buttons in a variable;
// select the output & store it in a variable;
// add an event listener of click to the increment variable;
// add an event listener of click to the decrement variable;


const increment = document.querySelector("#increment");

const decrement = document.querySelector("#decrement");

let output = document.querySelector("#output")


increment.addEventListener('click', ()=>{
    let result = output.textContent++;

    if (result===50){
        result.reset()
    }else{
        
    }
    
});

decrement.addEventListener('click', ()=>{
    let result = output.textContent--;
})


let incrementAdd = ()=>{

}




