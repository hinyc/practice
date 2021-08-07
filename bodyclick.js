function timeOut(callback) {
  setTimeout(() => {
    console.log('hinyc');
    callback();
  }, 3000);
}

timeOut(() => {
  console.log('ok!')
});