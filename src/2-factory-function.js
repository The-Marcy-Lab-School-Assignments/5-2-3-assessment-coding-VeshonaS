const bankAccountFactory = (balance) => {
 return myAccount = {

  checkBalance(){
   if (balance === null){
    balance = 0
    return balance
   }
    return balance
    
  },
  add(amount){
    balance += amount
    console.log(`$${amount} added.`)
    return balance
  },
  subtract(amount){
    balance -= amount
    console.log(`$${amount} subtracted.`)
    return balance
  } 
  }
};

module.exports = {
  bankAccountFactory,
};
