var xxzhh = {
chunk : function(array, size = 1) {
    var res = [];
    var s = 0
    var e = size
    while (e < array.length) {
      res.push(array.slice(s,size));
      s = size;
      e = size + size
    }
    res.push(ary.slice(s,array.length))
    return res;
  }

compact : function(array) {
    res = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] != false || array[i] != null || array[i] != 0|| array[i] != undefined || array[i] != NAN) {
        res.push(array[i])
      }
    }
    return res
  }













}