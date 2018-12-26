/*
  return a function primed for debounce.
  after last consecutive function is called
  trigger delay amount then execute function

  imagine water flowing to sink and once you turn it off
  wait delay amount and scoop water, unless you turn the sink back on

  const bark = () =>{ console.log('bark') }
  const barking = debounce(200, bark)
  barking()
  barking()
  barking()
  'bark' after last barking() + X delay
*/

const debounce = (delay, fn) => {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  }
}