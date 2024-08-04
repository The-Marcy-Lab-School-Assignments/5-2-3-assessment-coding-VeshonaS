class Phone {
  constructor( phoneNumber, contacts){
    this.phoneNumber = phoneNumber
    this.contacts = []
  }
  makeCall(name){
    for(let person of this.contacts){
      if (person.name === name){
        return `Calling ${person.name}...`
      }
    }
    if (name.length === 10){
      return `Calling ${name}...`
    }
    if((name.length !== 10 && name !== String) && !this.contacts.includes(name)){
      return 'Invalid'
    }
    
  }
  addContact(contact){
    /** FEEDBACK: When we use typeof what data type are the results?  */
    if ( typeof contact !== String && contact.length !== 10){
      return 'Invalid'
    }
      this.contacts.push(contact)
       return `${contact.name} added.`
  }
    
  
  removeContact(name){
    /** FEEDBACK: You are pretty close! We definitely need to find the contact's index before we remove it but we also need to check if a phoneNumber is valid and in the contacts array! */
    for(let i = 0; i < this.contacts; i++){
      let person = this.contacts[i]
      if (person.name === name){
        this.contacts.splice(i,1)
        return `${person.name} removed.`
      }
      if (Object.values !== name ){
        return 'Contact not found.'
    }
    
    }
  }
}

class AppleIPhone extends Phone {
  constructor(phoneNumber, model){
    super(phoneNumber ,)
    this.model = model
  }
  sendIMessage(phone, message){
    if(phone instanceof AppleIPhone){
      return `Message: ${message} - sent from ${this.model}`
    } else {
      return `Message could not be sent.`
    }
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
