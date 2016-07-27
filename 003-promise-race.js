var debugPromise = require('./debugPromise')

var promisesWhichResolve,
    promisesWhichReject,
    promiseWhichMixed,
    promiseRaceResolve,
    promiseRaceReject,
    promiseRaceMixed;

promisesWhichResolve = [
    Promise.resolve("OK1"),
    Promise.resolve("OK2")
];

promiseRaceResolve = Promise.race(promisesWhichResolve)

debugPromise(promiseRaceResolve, "Race Resolved")


promisesWhichReject = [
    Promise.reject("FAIL1"),
    Promise.reject("FAIL2")
];

promiseRaceReject = Promise.race(promisesWhichReject)

debugPromise(promiseRaceReject, "Race Rejected")



promiseWhichMixed = [
    Promise.resolve("OK1"),
    Promise.reject("FAIL2")
];

promiseRaceMixed = Promise.race(promiseWhichMixed)

debugPromise(promiseRaceMixed, "Race Mixed")
