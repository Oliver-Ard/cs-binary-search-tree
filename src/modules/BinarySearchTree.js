// Node class for the Tree.
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// Balanced Binary Search Tree class.
class Tree {
	constructor(array) {
		this.root = this.#buildTree(array);
	}

	// Build the tree.
	#buildTree(array) {
		// Remove duplicates from the array using a set and convert it back to an array, then sort the array.
		const sortedArray = Array.from(new Set(array)).sort((a, b) => a - b);

		// Recursive method for merging the tree.
		const mergeTree = (arr, startIndex, endIndex) => {
			// Base Case.
			if (startIndex > endIndex) {
				return null;
			}
			// Get the middle element and make it the root.
			const mid = Math.floor((startIndex + endIndex) / 2);
			const rootNode = new Node(arr[mid]);

			rootNode.left = mergeTree(arr, startIndex, mid - 1);
			rootNode.right = mergeTree(arr, mid + 1, endIndex);

			return rootNode;
		};

		return mergeTree(sortedArray, 0, sortedArray.length - 1);
	}

	// Insert a value using iteration.
	insert(value) {
		const newNode = new Node(value);

		if (this.root === null) {
			this.root = newNode;
			return;
		}

		let prevNode = null;
		let currentNode = this.root;
		// Traverse the tree until we find a leaf node to insert the new node.
		while (currentNode !== null) {
			if (value < currentNode.value) {
				prevNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				prevNode = currentNode;
				currentNode = currentNode.right;
			} else {
				// If we insert a duplicate value we will exit the loop.
				return;
			}
		}

		// Insert the new node when we reach the leaf node.
		if (value < prevNode.value) {
			prevNode.left = newNode;
		} else {
			prevNode.right = newNode;
		}
	}

	// Remove a node from the tree.
	deleteItem(value) {
		const removeNode = (node, valueToRemove) => {
			const currentNode = node;

			// Base case.
			if (currentNode === null) {
				return null;
			}
			/* 	If the value to be removed is less than the current node's value,
			move to the left subtree and recursively remove the value. */
			if (valueToRemove < currentNode.value) {
				currentNode.left = removeNode(currentNode.left, valueToRemove);
				return currentNode;
			}
			/*  If the value to be removed is greater than the current node's value,
			move to the right subtree and recursively remove the value. */
			if (valueToRemove > currentNode.value) {
				currentNode.right = removeNode(currentNode.right, valueToRemove);
				return currentNode;
			}

			// If the current node's value is equal to the value to be removed.
			// Case 1: Node with no child or only one child.
			if (currentNode.left === null) {
				return currentNode.right;
			}
			if (currentNode.right === null) {
				return currentNode.left;
			}

			// Case 2: Node with two children.
			// Find the smallest value in the right subtree (successor).
			let tempNode = currentNode.right;
			while (tempNode.left !== null) {
				tempNode = tempNode.left;
			}
			// Replace the current node with the successor value.
			currentNode.value = tempNode.value;
			// Remove the successor value from the right subtree.
			currentNode.right = removeNode(currentNode.right, tempNode.value);
			return currentNode;
		};

		// Start at the root
		this.root = removeNode(this.root, value);
	}

	// Search the tree for a node with the given value.
	find(value) {
		// Start at the root.
		let currentNode = this.root;

		// If the tree is empty, return null.
		if (!currentNode) {
			return null;
		}

		// Traverse the tree.
		while (currentNode) {
			// If the given value is less than the current node's value, go left.
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			}
			// If the given value is greater than the current node's value, go right.
			else if (value > currentNode.value) {
				currentNode = currentNode.right;
			}
			// If the given value is equal to the current node's value, return the current node.
			else if (value === currentNode.value) {
				return currentNode;
			}
		}

		// If we get to the end of the tree without finding the given value, return null.
		return null;
	}

	// Breadth-first traversal.
	levelOrder(callback = null) {
		//  If the root is null, return an empty array.
		if (!this.root) {
			return [];
		}

		const result = [];

		// Create a queue and add the root to it.
		const queue = [];
		// Add the root to the queue.
		queue.push(this.root);

		// While the queue is not empty:
		while (queue.length > 0) {
			// Remove a node from the queue.
			const currentNode = queue.shift();

			// Perform the callback operation on the node if a callback is provided.
			if (callback) {
				callback(currentNode);
			} else {
				// Add the node's value to the result.
				result.push(currentNode.value);
			}

			// If the node has a left child, add it to the queue.
			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			// If the node has a right child, add it to the queue.
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}

		// If a callback is provided, return undefined. Otherwise, return the array of node values.
		return callback ? undefined : result;
	}

	// Depth-first traversal in order.
	inOrder(callback = null) {
		// If the root is null, return an empty array.
		const result = [];

		// Create a recursive helper function.
		const traverse = (node) => {
			// If the node is not null:
			if (node !== null) {
				// Traverse the left subtree.
				traverse(node.left);

				// Perform the callback operation on the node if a callback is provided.
				if (callback) {
					callback(node);
				} else {
					// Add the node's value to the result.
					result.push(node.value);
				}

				// Traverse the right subtree.
				traverse(node.right);
			}
		};
		// Invoke the recursive helper function on the root.
		traverse(this.root);

		// If a callback is provided, return undefined. Otherwise, return the array of node values.
		return callback ? undefined : result;
	}

	// Depth-first traversal pre order.
	preOrder(callback = null) {
		// If the root is null, return an empty array.
		const result = [];

		// Create a recursive helper function.
		const traverse = (node) => {
			// If the node is not null:
			if (node !== null) {
				// Perform the callback operation on the node if a callback is provided.
				if (callback) {
					callback(node);
				} else {
					// Add the node's value to the result.
					result.push(node.value);
				}

				// Traverse the left subtree.
				traverse(node.left);
				// Traverse the right subtree.
				traverse(node.right);
			}
		};
		// Invoke the recursive helper function on the root.
		traverse(this.root);

		// If a callback is provided, return undefined. Otherwise, return the array of node values.
		return callback ? undefined : result;
	}

	// Depth-first traversal post order.
	postOrder(callback = null) {
		// If the root is null, return an empty array.
		const result = [];

		// Create a recursive helper function.
		const traverse = (node) => {
			// If the node is not null:
			if (node !== null) {
				// Traverse the left subtree.
				traverse(node.left);
				// Traverse the right subtree.
				traverse(node.right);

				// Perform the callback operation on the node if a callback is provided.
				if (callback) {
					callback(node);
				} else {
					// Add the node's value to the result.
					result.push(node.value);
				}
			}
		};
		// Invoke the recursive helper function on the root.
		traverse(this.root);

		// If a callback is provided, return undefined. Otherwise, return the array of node values.
		return callback ? undefined : result;
	}

	// Return the given node’s height.
	height(node) {
		// Base case. If the root is null, return 0.
		if (!node) {
			return -1;
		}

		// Recursively call height() on the left and right subtrees.
		const leftHeight = this.height(node.left);
		const rightHeight = this.height(node.right);

		// Return the max of the left and right depths, plus 1. We add 1 to account for the root.
		return Math.max(leftHeight, rightHeight) + 1;
	}

	/* 	Check if the difference between heights of the left subtree and the right subtree of every node is not more than 1. */
	isBalanced() {
		const checkBalance = (node) => {
			// Base case.
			if (!node) {
				// An empty tree is balanced.
				return true;
			}

			// Calculate the height of the left and the right subtrees.
			const leftHeight = this.height(node.left);
			const rightHeight = this.height(node.right);

			// Check if the difference in heights of the left and right subtrees is more than 1.
			if (Math.abs(leftHeight - rightHeight) > 1) {
				return false;
			}

			// Recursively check the balance of left and right subtrees.
			return checkBalance(node.left) && checkBalance(node.right);
		};

		// Start checking the balance of the tree from the root node.
		return checkBalance(this.root);
	}

	// Balance an unbalanced tree.
	rebalance() {
		// Retrieve the nodes of the tree.
		const unbalancedTree = this.inOrder();
		// Assign the root of the tree to the new balanced tree constructed.
		return (this.root = this.#buildTree(unbalancedTree));
	}

	// Print the tree.
	printTree() {
		// Recursive method for printing the tree in the console.
		const prettyPrint = (node, prefix = "", isLeft = true) => {
			if (node === null) {
				return;
			}

			if (node.right !== null) {
				prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
			}

			console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);

			if (node.left !== null) {
				prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
			}
		};

		return prettyPrint(this.root);
	}
}
export default Tree;
