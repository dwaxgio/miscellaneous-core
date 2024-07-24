// See https://aka.ms/new-console-template for more information
using System;

Console.WriteLine("Hello, World!");

// 1. Función de búsqueda lineal en un array
Console.WriteLine("1. Función de búsqueda lineal en un array");
int LinearSearch(int[] arr, int target)
{
    for (int i = 0; i < arr.Length; i++)
    {
        if (arr[i] == target)
        {
            return i;
        }
    }
    return -1;
}

// Prueba
int[] arr = { 1, 2, 3, 4, 5 };
int target = 4;
int result = LinearSearch(arr, target);
Console.WriteLine(result);

// 2. Búsqueda binaria
Console.WriteLine("2. Búsqueda binaria");
int BinarySearch(int[] arr, int target)
{
    int left = 0;
    int right = arr.Length - 1;

    while (left <= right)
    {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target)
        {
            return mid;
        }

        if (arr[mid] < target)
        {
            left = mid + 1;
        }
        else
        {
            right = mid - 1;
        }
    }
    return -1;
}

// Prueba
int[] arr2 = { 1, 2, 3, 4, 5 };
int target2 = 2;
int result2 = BinarySearch(arr2, target2);
Console.WriteLine(result2);

// 3. Ordenación por burbuja
Console.WriteLine("3. Ordenación por burbuja");
void BubbleSort(int[] arr)
{
    int n = arr.Length;

    for (int i = 0; i < n - 1; i++)
    {
        // Recorre el array hasta el último elemento no ordenado
        for (int j = 0; j < n - i - 1; j++)
        {
            // Si el elemento actual es mayor que el siguiente
            if (arr[j] > arr[j + 1])
            {
                // Intercambia los elementos
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Prueba
int[] arr3 = { 5, 3, 8, 4, 2 };
BubbleSort(arr3);
Console.WriteLine(string.Join(", ", arr3));

// 4. Recorrido Inorden de un árbol binario
Console.WriteLine("4. Recorrido Inorden de un árbol binario");

public class TreeNode
{
    public int Value; // Valor del nodo
    public TreeNode? Left; // Hijo izquierdo
    public TreeNode? Right; // Hijo derecho

    // Constructor del nodo
    public TreeNode(int value)
    {
        Value = value;
        Left = null;
        Right = null;
    }
}

// Función para recorrer el árbol en orden (inorder traversal)
void InorderTraversal(TreeNode? root)
{
    if (root != null)
    {
        InorderTraversal(root.Left); // Recorre el subárbol izquierdo
        Console.WriteLine(root.Value); // Procesa el nodo actual
        InorderTraversal(root.Right); // Recorre el subárbol derecho
    }
}

// Creación de un árbol binario de ejemplo
TreeNode root = new TreeNode(1)
{
    Left = new TreeNode(2)
    {
        Left = new TreeNode(4),
        Right = new TreeNode(5)
    },
    Right = new TreeNode(3)
};

// Prueba del recorrido inorden
InorderTraversal(root); // Debería imprimir 4, 2, 5, 1, 3

// Mantén la consola abierta
Console.ReadKey();
