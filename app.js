// Задание 1
const blockTwo =  document.querySelector(".box");

let positionLeft = 0;
let positionTop = 0;


step = ()=>{
  if (positionLeft <= 390 && positionTop === 0 ){
    positionLeft += 20;
    blockTwo.style.left =`${positionLeft}px`
    setTimeout(step,100);
  }
  else if (positionLeft >= 390 && positionTop <=390){
    positionTop += 20;
    blockTwo.style.top = `${positionTop}px`
    setTimeout(step,100);
  }
  else if (positionTop >= 390 && positionLeft !== 0) {
    positionLeft -= 20;
    blockTwo.style.left = `${positionLeft}px`
    setTimeout(step,100);
  }
  else if (positionLeft === 0 && positionTop !== 0) {
    positionTop -= 20;
    blockTwo.style.top = `${positionTop}px`
    setTimeout(step,100);
  }
}
step()



// Задание 2

const BtnStart = document.querySelector(".start")
const BtnStop = document.querySelector(".stop")
let num = 0;

BtnStart.addEventListener("click", ()=> {
  secondCount = setInterval(interval,1000)
  function interval(){
    num++
    console.log(`${num}`)
  }
})

BtnStop.addEventListener('click',()=>{
  clearInterval(secondCount)
  num = 0
})


// Заданиe 3

function sum(num){
  function child(){
    console.log(num*num)
  } child()
}
sum(3)


// Дополнительное задание

let arr = [1,3,4,6,7,11,12,13]
console.log( arr.filter(elem => elem % 2 === 0) );