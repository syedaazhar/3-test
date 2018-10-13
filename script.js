// write your JS code here
let numb = 7.99;
let count = 1;

function subraction() {
    if (count > 0) {
        document.querySelector('.add-count').value = --count;
        document.querySelector('.add-price').innerHTML = count * numb;
    }

}

function add() {
    document.querySelector('.add-price').innerHTML = count * numb;
    document.querySelector('.add-count').value = count++;

}

// function showBooks(){
//     let container = document.querySelector('.container');
//     for(let i =0;i<3;i++){
//         container.innerHTML
//     }
// }

