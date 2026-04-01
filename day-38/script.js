let arr = ["CSK","MI","RCB","KKR","PBKS","SRH","RR","LSG","DC","GT"]
let btn = document.querySelector('button')
let team_name = document.querySelector('h1')
btn.addEventListener('click',function() {
    let num = Math.floor(Math.random()*arr.length);
    team_name.innerHTML = arr[num]
})


