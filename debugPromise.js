function debugPromise(promise, label) {

    promise.then(function(data) {
            console.log(label + ": THEN onFulfilled", data);
        },
        function(data) {
            console.log(label + ": THEN onRejected", data);
        }
    )
    promise.catch(function(data) {
        console.log(label + ": CATCH", data);
    })
}

module.exports = debugPromise
