const arr = [2,5,6,7]
//calculate the sum of the array using either for of or for in
//solution
let sum = 0
for (let item of arr){
  sum += item
}


//high level
const users =['hari', 'shyam', 'hari']
//hint: how to know hari was already there in users array
//hint2: how to remove particular index/item
//remove from array if duplicate
//solution using filter and indexOf
users.filter((item, index)=>{
    return users.indexOf(item) === index
  })
//solution using forEach and includes
const uniq = []
users.forEach((item)=>{
  if (!uniq.includes(item)){
    uniq.push(item)
  }
})

console.log(uniq)



const newArr = [[4,5], [5,7], [7,2]]
//calculate the sum of all the odd numbers inside this nested array
//solution
let add = 0
const a = newArr.map((item)=>{
  item.map((element)=>{
    if(element % 2 !== 0){
      add += element
    }
  })
})
console.log(add)

const myDetails = [
    {id:3, name: 'hari'},
    {id:5, name: 'shyam'},
    {id:6, name: 'gopal'},
  ]
  
// return only array of ids: expected output  [3,5,6]
//solution
myDetails.map((item)=>{
  return item.id
})

const userDetails= [
    {score: 0, name:'hari', marks: [10,3,23]},
    {score: 0, name:'shyam', marks: [50,23,23]},
    {score: 0, name:'shyam',marks: [20,13,43]},
]
//loop over the arr of objects and calculate total score, expected output is:
//solution
userDetails.map((item)=>{
  const a = item.marks.reduce((accumulator, nextvalue)=>{
    return accumulator + nextvalue
  })
  return item.score = a
})
console.log(userDetails)

// [
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},
// ]
