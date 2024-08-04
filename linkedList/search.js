class Node{
    constructor(data,next=null){
        this.data = data
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }
}

LinkedList.prototype.search = function(key){

    let current = this.head

    // null -> falsy
    while(current){
        if(current.data === key)
            return true
        current = current.next
    }
    return false

}