const fs = require(`fs`);

if (!global.gc) {
  console.error('global.gc not found - run with "--expose-gc" flag');
  // process.exit(1);
}

function createPromise() {
  return new Promise(resolve =>
    setTimeout(function() {
      global.gc();
      debugger;
      resolve();
    }, 2000)
  );
}

function test(arg) {
  const someStuff = {
    arg
  };

  createPromise(someStuff).then(a => {
    debugger;
    console.log(someStuff, a);
  });

  return undefined;
}

function wrap() {
  test(fs.readFileSync(`./data.txt`, `utf-8`));
}

wrap();

console.log("test finished");
