/* a quick rough search in string

  const list = ['macaroni','mawhack','madcat']

  fuzzySearch('mac', list)
  => what its looking at ['[m][a][c]aroni','[m][a]wha[c]k','[m]od[a]d[c]at']
  => ['macaroni','mawhack','madcat']
  fuzzySearch('mi', list)
  => what its looking at ['[m]acaron[i]','mawhack','madcat']
  => ['macaroni']
*/

const fuzzySearch = (dirtyNeedle, dirtyHaystack) => {
  let needle = dirtyNeedle
  let haystack = dirtyHaystack

  if (
    (typeof haystack === 'object' && haystack !== null) ||
    typeof haystack === 'array'
  ) {
    haystack = JSON.stringify(haystack)
  }

  needle = needle.replace(/\s/g, '').toLowerCase()
  haystack = haystack.replace(/\s/g, '').toLowerCase()

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
