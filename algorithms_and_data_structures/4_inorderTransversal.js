// clase para representar un nodo del arbol binario
class TreeNode {
  constructor(value) {
    this.value = value; // valor del nodo
    this.left = null; // hijo izquierdo
    this.right = null; // hijo derecho
  }
}

// funcion para recorrrer el arbol en orden (inorder tranversal)
const inorderTraversal = (root) => {
  if (root !== null) {
    inorderTraversal(root.left); // recorre el subarbol izquierdo
    console.log(root.value); // procesa el arbol actual
    inorderTraversal(root.right); // recorre el subarbol derecho
  }
};

// creacion de un arbol binario de ejemplo
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// prueba del recorrido en orden
inorderTraversal(root); 