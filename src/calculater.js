class Calculator{
  constructor(){
    this.result = 0;
    this.slot = [];
  }
  add(){
    this.result = 0;
    for (var i =0; i < arguments.length; i++){
       this.result += arguments[i];
       
   }
   
    return this.result;
 }
       
       
  multiply(){
   this.result = 1;
  for (let i = 0; i < arguments.length; i++){
      this.result *= parseFloat(arguments[i]);
             
    }
    
    return this.result;
 }
  last(){
    return this.result;
  }

  setSlot(){


  }
}
// let calculator = new Calculator();
//console.log(calculator.multiply(1,3));
//console.log(calculator.multiply(calculator.last(),1,3));
//console.log(calculator.last());





