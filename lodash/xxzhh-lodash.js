var xxzhh = {
chunk: function chunk(array, size = 1) {
    let res = [];
    let s = 0
    let e = size
    while (e < array.length) {
      res.push(array.slice(s,size));
      s = size;
      e = size + size
    }
    res.push(array.slice(s,array.length))
    return res;
  },

compact: function compact(array) {
    res = [];
    for (let i = 0; i < array.length; i++) {
      if(array[i]) {
        res.push(array[i])
      }
    }
    return res
  },

concat: function concat(array,[values]) {
  let res = [];
  res.push(array);
  res.push([values])
  return res;
},

drop: function drop(array, number = 1) {
  if (array.length < number) {
    return []
  }
  for (let i = 0; i < number; i++) {
    array.shift() 
  }
  return array
},

dropRight: function dropRight(array, number = 1) {
  if (array.length < number) {
    return []
  }
  for (let i = 0; i < number; i++) {
    array.pop()
  }
  return array
},

head: function head(array) {
  return array[1];
},

initial: function initial(array) {
  array.pop();
  return array;
},

sortedUniq: function sortedUniq(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] != array[i+1]) {
      res.push(array[i])
    }
  }
  return res
},

tail: function tail(array) {
  array.shift()
  return array
},

uniq: function uniq(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (res.indexOf(array[i]) == -1) {
      res.push(array[i])
    }
  }
  return res;
},

add: function add(augend, addend) {
  return augend + addend
},

divide: function divide(dividend, divisor) {
  return dividend / divisor
},

max: function max(array) {
  
}
















}