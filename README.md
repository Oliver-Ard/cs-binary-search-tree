# Binary Search Tree

Custom [`binary search tree (BST)`](https://en.wikipedia.org/wiki/Binary_search_tree) data structure using `classes`.

#### Features:

The `BST` instance has the following methods:

- `insert(value)`: insert a value into the tree;
- `deleteItem(value)`: delete a value from the tree;
- `find(value)`: returns the node with the given value;
- `levelOrder(callback)`: **optional** callback. Returns an array of values in a level order if no callback is given as an argument;
- `inOrder(callback)`: **optional** callback. Returns an array of values in an in-order if no callback is given as an argument;
- `preOrder(callback)`: **optional** callback. Returns an array of values in a pre-order if no callback is given as an argument;
- `postOrder(callback)`: **optional** callback. Returns an array of values in a post-order if no callback is given as an argument;
- `height(node)`: returns the given node’s height;
- `isBalanced`: checks if the tree is balanced;
- `rebalance`: rebalance the unbalanced tree;
- `printTree`: print the tree in the console;

---

When you create the tree for the first time, it is [`balanced`](https://www.geeksforgeeks.org/balanced-binary-tree/). Later, if you add or delete values, it can become `unbalanced`. Rebalancing is done manually, not automatically.

---

### Demo:

1. `git clone git@github.com:Oliver-Ard/cs-binary-search-tree.git`
2. `cd cs-binary-search-tree`
3. Open the project with your code editor;
4. In the editor console: `npm install`, after that `npm start`
5. Check the output in the editor console.

---

### Big O Notation:

If the tree is `unbalanced`:

**Time Complexity:**

- searching, insertion and deletion `O(n)`

If the tree is `balanced`:

**Time Complexity:**

- searching, insertion and deletion `O(log n)`

**Space Complexity** for both tree types is `O(n)`.

---

#### What I have practiced in this project?

- create a custom `binary search tree`;

**[This](https://www.theodinproject.com/lessons/javascript-binary-search-trees)** project is from **[The Odin Project](https://www.theodinproject.com/)**, [JavaScript Course](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript).
