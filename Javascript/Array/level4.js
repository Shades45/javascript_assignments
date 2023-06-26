//Q1 find if hari is in allUsers array or not/
//expected output is : 
//true
const name= 'hari'
const allUsers = ['shyam','thakur','hari']
//solution
allUsers.includes(name)

//Q2 find number of duplicates
//expected output is : 2
//true
const user= 'hari'
const userArr = ['hari','shyam','hari','thakur']
//solution
let sum = 0
userArr.map((item)=> {
    if(item.includes(user)){
      return sum++
    }
  })
  console.log(sum)