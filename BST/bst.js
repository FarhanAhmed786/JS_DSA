class BSTNode{
    constructor(key){
        this.key=key;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }
}

//Insertion in BST
BinarySearchTree.prototype.insert = function(key){
    const newNode = new BSTNode(key)

    if(this.root === null){
        this.root===newNode
    }else{
        this.insertNode(this.root,newNode)
    }

}
BinarySearchTree.prototype.insertNode = function(node,newNode){
    if(newNode.key < node.key){
        if(node.left === null){
            node.left = newNode
        }else{
            this.insertNode(node.left,newNode)
        }
    }else{
        if(node.right === null){
            node.right = newNode
        }else{
            this.insertNode(node.right,newNode)
        }
    }
}
// Deletion in BST
BinarySearchTree.prototype.delete = function(key){
    this.root = this.deleteNode(this.root,key)
}
//delete node
BinarySearchTree.prototype.deleteNode = function(node,key){// node->right
    if(node ===  null){
        return null
    }
    if(key<node.key){
        node.left = this.deleteNode(node.left,key)
    }else if(key>node.key){
        node.right = this.deleteNode(node.right,key)
    }else{
        if(node.left === null && node.right === null){
            return null
        }
        else if(node.left === null){
            return node.right
        }
        else if(node.right === null){
            return node.left
        }else{
            let tempNode = this.findMinNode(node.right)
            node.key = tempNode.key
            node.right = this.deleteNode(node.right,tempNode.key)
        }
    }
    return node
    
}
BinarySearchTree.prototype.findMinNode = function(node){
    while(node.left!== null){
        node = node.left
    }
    return node
}

BinarySearchTree.prototype.inOrderTraversal = function(){
    const result = []
    this.inOrder(this.root,result)
    return result
}

BinarySearchTree.prototype.inOrder = function(){
    if(node !== null){
        this.inOrder(node.left,result)
        result.push(node.key)
        this.inOrder(node.right,result)
    }
}

BinarySearchTree.prototype.preOrderTraversal = function(){
    const result = []
    this.preOrder(this.root,result)
    return result
}

BinarySearchTree.prototype.preOrder = function(){
    if(node !== null){
        result.push(node.key)
        this.preOrder(node.left,result)
        this.preOrder(node.right,result)
    }
}

BinarySearchTree.prototype.postOrderTraversal = function(){
    const result = []
    this.postOrder(this.root,result)
    return result
}

BinarySearchTree.prototype.postOrder = function(){
    if(node !== null){
        result.push(node.key)
        this.postOrder(node.left,result)
        this.postOrder(node.right,result)
    }
}