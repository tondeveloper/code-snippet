/*
  as it loop through array, indexOf return 1 if item exist else 0 
*/

const removeDupe = arr => arr.filter((n, i)=> i===arr.indexOf(n))
