// select the button ;
// store the select buttons in a variable;
// select the output & store it in a variable;
// add an event listener of click to the increment variable;
// add an event listener of click to the decrement variable;


const increment = document.querySelector("#increment");

const decrement = document.querySelector("#decrement");

let output = document.querySelector("#output")


increment.addEventListener('click', ()=>{

    // let i = 0
    // while(i<=50){
    //     console.log(i);
    //     i++

        
    // }

    let result = output.textContent++;

    console.log(result)
    
});

decrement.addEventListener('click', ()=>{
    console.log("you clicked me to decrement");
})


let incrementAdd = ()=>{

}




