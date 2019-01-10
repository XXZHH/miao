var xxzhh = {
chunk : function chunk(ary, size = 1) {
    var res = [];
    var s = 0
    var e = size
    while (e < ary.length) {
      res.push(ary.slice(s,size));
      s = size;
      e = size + size
    }
    res.push(ary.slice(s,ary.length))
    return res;
  }

  compact : function {
    
  }
}