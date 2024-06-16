class Node{
    constructor(data,next=null,prev=null){
        this.data=data
        this.next=next
        this.prev=prev
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }
}

// Insert at begining
DoublyLinkedList.prototype.insertAtFront = function(data){
    const newNode = new Node(data,this.head,null)

    if(this.head !== null){
        this.head.prev = newNode

    }
    this.head = newNode
    if(this.tail === null){
        this.tail = newNode
    }
}
// Insert at End 
DoublyLinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data,null,this.tail)
    if(this.tail !== null){
        this.tail.next = newNode
    }
    this.tail = newNode
    if(this.head === null){
        this.head = newNode
    }
}
// Insert after a given node
DoublyLinkedList.prototype.insertAtAfter = function(data,prevNode){
    if(prevNode === null){
        console.log("Invalid prev node");
        return
    }
    const newNode = new Node(data,prevNode.next,prevNode)
    if(prevNode.next !==null){
        prevNode.next.prev = newNode
    }
    prevNode.next = newNode
    if(newNode.next === null){
        this.tail=newNode
    }

}
//Delete at first node
DoublyLinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        console.log("nothing to delete");
        return;
    }
    if(this.head === this.tail){
        this.tail = this.head = null
        return
    }
    this.head = this.head.next
    this.head.prev = null
}
// Delete last node
DoublyLinkedList.prototype.deleteLastNode = function(){
    if(!this.tail){
        console.log("DLl is empty");
        return;
    }

    if(this.head===this.tail){
        this.head = this.tail = null
        return
    }
    this.tail = this.tail.prev
    this.tail.next = null
}
//reverse
DoublyLinkedList.prototype.reverse = function(){
    let current = this.head
    let temp = null

    while(current){
        //swapping
        temp = current.prev
        current.prev = current.next
        current.next = temp
        //move to next node
        current = current.prev
    }
    if(temp !== null){
        this.tail = this.head
        this.head = temp.prev
    }
}