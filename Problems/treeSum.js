// breadth

const treeSum = (root)=>{

    if(root === null)
        return 0;
    
    const queue = [root]
    let sum = 0

    while(queue.length > 0){
       const node =  queue.shift()
       sum += node.key
        if(node.left !== null){
            queue.push(node.right)
        }  
        if(node.right !== null){
            queue.push(node.left)
        }
    }
}

// depth
const treeSumDfs = (root)=>{
    if(root === null)
        return 0;

    return root.key + treeSumDfs(root.left) + treeSum(root.right)

}