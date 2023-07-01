// write a code that generates random number from 1 to 5
const random = (min, max) =>{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  random(1,5)