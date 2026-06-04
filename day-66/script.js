/*
1. Simulate a Food Delivery

// Task: Create a function orderFood that returns a Promise. It should
resolve after 2 seconds with" Pizza delivered!".

// Bonus: Add a chance to reject with " Delivery failed!".
*/

function orderFood() {
    return new Promise((res,rev)=>{
        setTimeout(() => {
            res();
            
            
        }, 2000);
    })
}
orderFood().then(()=>{
    console.log("Pizza delivered!");
    
})