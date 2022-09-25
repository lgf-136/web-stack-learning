function myPick(todo, keys) {
  const obj = {};
  keys.forEach(key => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });
  return obj;
}
console.log(myPick({ name: 'lgf',
  age: 23,
  phone: '88888888' }, [ 'name', 'phone' ]));

// node demo.js
