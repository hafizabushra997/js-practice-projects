let clickCount=document.getElementById('clickCount')
let clickBtn=document.getElementById('clickBtn')
let resetBtn=document.getElementById('resetBtn')
let count=0

clickBtn.addEventListener('click',()=>{
    count++
    clickCount.innerText=count
})
resetBtn.addEventListener('click',()=>{
    count=0
    clickCount.innerText=count
    // clickCount.innerText = Math.max(count, 0);  // For later use
})