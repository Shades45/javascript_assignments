const obj = {
    computer: 42,
    maths: 42,
    science: 50
}

//calculate the percentage he scored in the exams out of total 150 score
//solution
const totalPercentage = (item) =>{
  return (item.computer+item.maths+item.science)/150 * 100
}
totalPercentage(obj)

const userDetails={
    name: "kaylin",
    maths: 23,
    science: 35,
    gk:30
}

// {
//     userName: 'kaylin',
//     subjectCodes: ['M','S', 'G'],
//     subjectScores: [23,35,30]
// }