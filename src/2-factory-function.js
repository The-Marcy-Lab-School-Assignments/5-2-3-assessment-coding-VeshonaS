/** FEEDBACK: How can we edit this parameter so it has a default value? */
const bankAccountFactory = (balance) => {
 return myAccount = {

  checkBalance(){
    /** FEEDBACK: What if nothing is passed in... Will the value of balance still be null? */
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
