// console.log(date);
// date = date.toLocaleString()
// console.log(date);


let clock = document.querySelector(`.clock`)
setInterval( function(){
    
    let date = new Date();
    date = date.toLocaleTimeString();
    clock.innerHTML=`${date}`
    // console.log(date);

},1000)


// const mangesh = document.querySelector(`.navbar`)
// mangesh.innerHTML=``