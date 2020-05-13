function asyncMethod(callBack) {
  setTimeout(() => {
    console.log("Async Callback");
    callBack();
  }, 1500);
}

asyncMethod(() => console.log("Async Callback Completed"));