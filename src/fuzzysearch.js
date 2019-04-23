/* a quick rough search in string

  const list = ['macaroni','mawhack','madcat']

  fuzzySearch('mac', list)
  => what its looking at ['[m][a][c]aroni','[m][a]wha[c]k','[m]od[a]d[c]at']
  => ['macaroni','mawhack','madcat']
  fuzzySearch('mi', list)
  => what its looking at ['[m]acaron[i]','mawhack','madcat']
  => ['macaroni']
*/

const fuzzySearch = (needle, haystack) => {
  
  if (
    (typeof haystack === 'object' && haystack !== null) || typeof haystack === 'array'
  ) {
    try{
      haystack = JSON.stringify(haystack)
    }catch(e){
      return false;
    }
  }
  
  let hlen = haystack.length
  let nlen = needle.length
  if (nlen > hlen) {
    return false
  }
  if (nlen === hlen) {
    return needle === haystack
  }

  outerLoop: for (var i = 0, j = 0; i < nlen; i++) {
    let nch = needle.charCodeAt(i)
    while (j < hlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outerLoop
      }
    }
    return false
  }
  return true
}
