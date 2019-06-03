// class Calculator{
//   constructor(){
//     this.arrSlot = [];
//     var sum = this.result;
//   }
//   add(){
//     this.result = 0;
//     for (var i =0; i < arguments.length; i++){
//        this.result += arguments[i];
       
//    }
     
//     return this.result;
//  }
       
       
//   multiply(){
//    this.result = 1;
//   for (let i = 0; i < arguments.length; i++){
//       this.result *= parseFloat(arguments[i]);
             
//     }
    
//     return this.result;
//  }
//   last(){
//     return this.result;
//   }

//   setSlot(number){
//    this.arrSlot.push(this.last);
//    return this.arrSlot[number - 1];

//   }

//   getSlot(number){
//     return this.arrSlot; 
//   }
// }
// let calculator = new Calculator();
//console.log(calculator.multiply(1,3));
//console.log(calculator.multiply(calculator.last(),1,3));
//console.log(calculator.last());
class Calculator{

  constructor(){
     this.slotArr = [];

  }

  add(){
      let result = 0;
      for(let i = 0; i < arguments.length; i++){
          result += parseFloat(arguments[i]);
          this.last = result;
  }
  return result;
  }

  multiply(){
      let result = 1;

      for(let i = 0; i < arguments.length; i++){
          result *= parseFloat(arguments[i]);
          this.last = result;
      }
      return result;
  }
  Last(){
      return this.last;
  }


  setSlot(number){


      this.slotArr.push(this.last);
      return this.slotArr[number - 1];

  }
  getSlot(number){

      return this.slotArr[number - 1];
  }

}




