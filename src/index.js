import Tree from "./modules/BinarySearchTree.js";

function randomNrArray(arrLength) {
	const array = [];

	for (let i = 0; i < arrLength; i += 1) {
		const randomNumber = Math.floor(Math.random() * 100);
		array.push(randomNumber);
	}
	return array;
}

function printBST() {
	const randomArray = randomNrArray(10);
	const binarySearchTree = new Tree(randomArray);

	console.log("Balanced Binary Search Tree!");
	console.log("-----------------------------");
	console.log("Is the tree balanced?");
	console.log(binarySearchTree.isBalanced());
	binarySearchTree.printTree();
	console.log("-----------------------------");

	console.log("Tree values in level order:");
	console.log(binarySearchTree.levelOrder());
	console.log("Tree values in pre order:");
	console.log(binarySearchTree.preOrder());
	console.log("Tree values in post order:");
	console.log(binarySearchTree.postOrder());
	console.log("Tree values in order:");
	console.log(binarySearchTree.inOrder());
	console.log("-----------------------------");

	console.log("Add 3 more values to unbalance the tree.");
	binarySearchTree.insert(101);
	binarySearchTree.insert(122);
	binarySearchTree.insert(132);
	console.log("-----------------------------");

	console.log("Is the tree balanced?");
	console.log(binarySearchTree.isBalanced());
	binarySearchTree.printTree();
	console.log("-----------------------------");

	console.log("Rebalance the tree!");
	binarySearchTree.rebalance();
	console.log("-----------------------------");
	console.log("Is the tree balanced?");
	console.log(binarySearchTree.isBalanced());
	binarySearchTree.printTree();
	console.log("-----------------------------");

	console.log("Tree values in level order:");
	console.log(binarySearchTree.levelOrder());
	console.log("Tree values in pre order:");
	console.log(binarySearchTree.preOrder());
	console.log("Tree values in post order:");
	console.log(binarySearchTree.postOrder());
	console.log("Tree values in order:");
	console.log(binarySearchTree.inOrder());
}

printBST();
