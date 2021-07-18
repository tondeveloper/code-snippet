/*
  Assign value to deep nested object using recursion and value reference.
  This mutate the data!
*/

const data = {
  cat: {
    dog: {
      bird: 9
    }
  },
  rabbit: [
    {
      dog: {
        bird: 8
      }
    }
  ]
}

const objSetter = (obj, value, path) => {
  const [head, ...rest] = path.toString().split('.')
  if(!rest.length){
    obj[head] = value
  }else{
    if(obj[head] === undefined){
      obj[head] = {}
      objSetter(obj[head], value, rest.join('.'))
    }else{
      objSetter(obj[head], value, rest.join('.'))
    }
  }
}

objSetter(data, 8888, 'rabbit.0.dog.bird')
objSetter(data, 9999, 'cat.dog.bird')
console.log(data)
