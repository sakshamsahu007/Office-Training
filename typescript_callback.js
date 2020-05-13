function asyncMethod(callBack) {
    setTimeout(function () {
        console.log("Async Callback");
        callBack();
    }, 1500);
}
asyncMethod(function () { return console.log("Async Callback Completed"); });
