const timeout = ms =>
  new Promise((res, rej) =>
    setTimeout(resolve, ms, 'done'));

timeout(100).then(value =>
  console.log(value));