/*
  return a function primed for throttling.
  after each consecutive function is called
  trigger execution after delay amount

  imagine water flowing to sink and you
  put your hand every delay interval

  const meow = () =>{ console.log('meow') }
  const meowing = throttle(200, meow)
  meowing()
  meowing()
  meowing()
  'meow' after X interval
  meowing()
  meowing()
  meowing()
  'meow' after X interval
*/

const throttle = (delay, fn) => {
  let lastCall = 0;
  return (...args) => {
    const now = new Date.getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}