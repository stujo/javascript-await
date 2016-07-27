var p;

p = new Promise(executor);

p.then(function(data) {
        console.log("THEN onFulfilled", data);
    },
    function(data) {
        console.log("THEN onRejected", data);
    }
)

p.catch(function(data) {
    console.log("CATCH", data);
})

function executor(resolve, reject) {

    function decider() {
        var rand;
        rand = Math.random();

        if (rand >= 0.5) {
            resolve(rand);
        } else {
            reject("Value too low " + rand);
        }
    }

    setTimeout(decider, 100);
}
