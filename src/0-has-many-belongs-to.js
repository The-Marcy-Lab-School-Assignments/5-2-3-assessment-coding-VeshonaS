const { getId } = require('./utils');

class ToDoItem {
   items = []
  constructor(description, priorityLevel, isDone ){
    this.description = description 
    this.priorityLevel = priorityLevel
    this.isDone = false 
    this.id = getId();
  }
 trackItems(){
  this.items.push(this.description)
 }
}


class ToDoList {
  allLists =[]
  constructor(name, allItems) {
    this.name = name 
    this.id = getId();
    this.allItems = []
  }
  createItem(des, priorityLevel){
    const addedTask = new ToDoItem(des, priorityLevel)
    this.allItems.push(addedTask)
    return addedTask
  }
  getItems(){
    return [...this.allItems ]
  }
  getCompletedCount(){
    if (this.isDone === true ){
      this.choreCounter++
    }
    
  }
  static list(){
    // return instanceof ToDoList
  }
  static findBy(id){
  
    for (let item of this.allItems){
      if (item.id === id){
        return item
      }
    }
  }
  getAllLists(){
    this.allLists.push(this.name)
  }
}

module.exports = {
  ToDoItem,
  ToDoList
};