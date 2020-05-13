var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async is done!");
        resolve();
    }, 1500);
});
