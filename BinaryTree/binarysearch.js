

//For the purposes of this challenge, we define a binary tree to be a binary search tree with the following ordering requirements
//*The data value of every node in a node´s left subtree is less that the 
//value of that node
//*The data value of every node in a node´s right subtree is greater 
//than the data value of that node 
array = [1,2,3]

function iBST(array){
    if(array.val==null){
        return false;
    }
//Retornar falso si el nodo izquierdo es mayor que el nodo padre
if (array.left !=null && array.left.val>array.val){
    return false;
}
//Retornamos falso si el nodo derecho es mayor que el nodo padre 
if (array.right != null && array.right.val< array.val){
    return false;
}
//Retornamos falso si recursivamente los subarboles izquierdo o derecho 
//no son un BST (Binary search tree)
if (!iBST(array.left)||!iBST(array.right)){
    return false;
}
return true;
}
console.log(iBST(array))