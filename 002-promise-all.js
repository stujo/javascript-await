var debugPromise = require('./debugPromise')

var promisesWhichResolve,
    promisesWhichReject,
    promiseWhichMixed,
    promiseAllResolve,
    promiseAllReject,
    promiseAllMixed;

promisesWhichResolve = [
    Promise.resolve("OK1"),
    Promise.resolve("OK2")
];

promiseAllResolve = Promise.all(promisesWhichResolve)

debugPromise(promiseAllResolve, "All Resolved")


promisesWhichReject = [
    Promise.reject("FAIL1"),
    Promise.reject("FAIL2")
];

promiseAllReject = Promise.all(promisesWhichReject)

debugPromise(promiseAllReject, "All Rejected")



promiseWhichMixed = [
    Promise.resolve("OK1"),
    Promise.reject("FAIL2")
];

promiseAllMixed = Promise.all(promiseWhichMixed)

debugPromise(promiseAllMixed, "All Mixed")
