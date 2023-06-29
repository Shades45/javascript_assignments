//Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
//expected output is 600 

const rideDetails= {
    pickup: 'balaju',
    destination: 'thamel',
    distance: '20km',
    unitKmPrice: 30
}
//solution
const sqkm = () => {
    return rideDetails.distance.replace('km', '') * rideDetails.unitKmPrice
  }
  
  console.log(sqkm())


//Q2 write a js function that checks if the object has status success or not
//should return true or false

const status1 ={
    status: 'onTheWay'
}
const status2 ={
    status: 'success'
}
//solution
const checkIfSucces = (item) => {
    if (item.status === 'success'){
      return true
    }else{
      return false
    }
  }
  checkIfSucces(status1) //should return false
  
  checkIfSucces(status2)  //should retturn true
  


