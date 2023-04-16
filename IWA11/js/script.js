// script.js

const orderOne = document.querySelector('[data-key = "order1"]')
const oneBiscuits = orderOne.getAttribute('data-biscuits')
const oneDonuts = orderOne.getAttribute('data-donuts')
const onePancakes = orderOne.getAttribute('data-pancakes')
const oneStatus = orderOne.getAttribute('data-delivered')

document.querySelector('.biscuits .count').innerText = oneBiscuits
document.querySelector('.donuts .count').innerText = oneDonuts
document.querySelector('.pancakes .count').innerText = onePancakes
document.querySelector('.status dd').innerText = oneStatus

const orderTwo = document.querySelector('[data-key="order2"]')
const twoBiscuits = orderTwo.getAttribute('data-biscuits')
const twoDonuts = orderTwo.getAttribute('data-donuts')
const twoPancakes = orderTwo.getAttribute('data-pancakes')
const twoStatus = orderTwo.getAttribute('data-delivered')

document.querySelector('[data-key="order2"] .biscuits .count').innerText = twoBiscuits
document.querySelector('[data-key="order2"] .donuts .count').innerText = twoDonuts
document.querySelector('[data-key="order2"] .pancakes .count').innerText = twoPancakes
document.querySelector('[data-key="order2"] .status dd').innerText = twoStatus

const orderThree = document.querySelector('[data-key="order3"]')
const threeBiscuits = orderThree.getAttribute('data-biscuits')
const threeDonuts = orderThree.getAttribute('data-donuts')
const threePancakes = orderThree.getAttribute('data-pancakes')
const threeStatus = orderThree.getAttribute('data-delivered')

document.querySelector('[data-key="order3"] .biscuits .count').innerText = threeBiscuits
document.querySelector('[data-key="order3"] .donuts .count').innerText = threeDonuts
document.querySelector('[data-key="order3"] .pancakes .count').innerText = threePancakes
document.querySelector('[data-key="order3"] .status dd').innerText = threeStatus


// oneBiscuits = oneRoot.biscuits,
// oneDonuts = oneRoot.donuts,
// onePancakes = oneRoot.pancakes,
// oneStatus = oneRoot.status ? Delivered : Pending

// twoBiscuits= twoRoot.biscuits,
// twoDonuts = twoRoot.donuts,
// twoPancakes = twoRoot.pancakes,
// twoStatus = twoRoot.status ? Delivered : Pending

// threeBiscuits = threeRoot.biscuits,
// threeDonuts = threeRoot.donuts,
// threePancakes = threeRoot.pancakes,
// threeStatus = threeRoot.status ? Delivered : Pending