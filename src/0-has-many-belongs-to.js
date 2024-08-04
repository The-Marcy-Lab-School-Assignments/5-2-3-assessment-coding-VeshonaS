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
  /** FEEDBACK: Here, allItems is not being used so it is not needed in the parameter. */
  constructor(name, allItems) {
    this.name = name 
    this.id = getId();
    /** FEEDBACK: allItems should be a static/class array and when you create an instance of a toDoList it gets added to the static array.   */
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
  /** FEEDBACK: You are kind of close, we do want to check if the current object's .isDone's value is true and we do want to keep track of it.
   * What is missing here is that we need to iterate through the entire toDoList and keep track of how many toDoItems are completed!
   */
  getCompletedCount(){
    if (this.isDone === true ){
      this.choreCounter++
    }
    
  }
  static list(){
    // return instanceof ToDoList
  }
  static findBy(id){
    /** FEEDBACK: Here you should be iterating through the static property that is holding the list.*/
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