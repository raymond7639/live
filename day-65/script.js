function stepOne() {
    return new Promise(function(res,ret){
        console.log("step 1");
        res();        
    })
}

function stepTwo() {
    return new Promise(function(res,ret){
        console.log("step 2");
        res();

    })
}

function stepThree() {
    return new Promise(function(res,ret){
        console.log("Step 3");
        res();
    })
}

stepOne().then(stepTwo).then(stepThree).then(function(){
    console.log("all step done");
    
})
