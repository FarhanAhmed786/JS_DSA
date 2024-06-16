class Node{
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }

}

// insert at front
LinkedList.prototype.insertAtFront = function(data){
    const newNode = new Node(data);
    this.head= newNode;
}

// insert at the end

LinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data);
    // if this.head is null
    if(!this.head){
        this.head = newNode
        return;
    }
    // 
    let last = this.head
    while(last.next ){
        last = last.next
    }
    last.next = newNode;

}

// insert at given node
LinkedList.prototype.insertAfter = function(prevNode,data){
    if(!prevNode){
        console.log("the given prev node cannot be null");
        return;
    }
    const newNode = new Node(data,prevNode.next)
    prevNode.next = newNode
}

// delete first node
LinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        return
    }
    this.head = this.head.next
}
// delete last node
LinkedList.prototype.deleteLastNode = function(){
    if(!this.head){
        return
    }
    if(!this.head.next){
        this.head = null
        return
    }
    let secondLast = this.head
    while(secondLast.next.next){
        secondLast = secondLast.next
    }
    secondLast.next = null;
}
//printing linked list
LinkedList.prototype.print= function(){
    if(!this.head){
        console.log("list is empty");
        return;
    }
    let current = this.head
    while(current !== null){
        console.log(`${current.data}  `);
        current = current.next
    }
    return
}

LinkedList.prototype.deleteByKey= function(key){
    // if list is empty
    if(!this.head){
        console.log("list is empty");
        return;
    }
    //if data found on head
    if(this.head.data === key){
        this.head = this.head.next
        return
    }
    //
    let current = this.head
    while(current.next !== null){
        if(current.next.data === key){
            current.next = current.next.next
            return
        }
        current = current.next
    }
    console.log("no node found with key: ",key);

}

// search operation
LinkedList.prototype.search = function(key){
    let current = this.head

    while(current){
        if(current.data === key){
            return true
        }
        current = current.next
    }
    return false
}

//traversal
LinkedList.prototype.traversal= function(){
    let current = this.head

    let listValues = []
    while(current){
        listValues.push(current.data)
        current = current.next
    }
    console.log(listValues.join("->"));
}
// reverse linked list
LinkedList.prototype.reverse= function(){
    let curr = this.head
    let prev = null
    let next = null
    while(curr){
        next = curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    this.head=prev
}


const l = new LinkedList()
l.insertAtFront(1)
l.insertAtEnd(5)
l.insertAtEnd(6)
l.insertAtEnd(7)
// l.print()
// l.deleteByKey(6)
// l.print()
l.traversal()
l.reverse()
l.traversal()

