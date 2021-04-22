class TreeNode {
    key: number;
    data: string;
    left: TreeNode | undefined;
    right: TreeNode | undefined;

    constructor(key: number, data: string) {
        this.key = key;
        this.data = data;
        this.left = undefined;
        this.right = undefined;
    }
}
class Tree {
    head: TreeNode;

    constructor(head: TreeNode) {
        this.head = head;
    }

    addChild(node: TreeNode | undefined, key: number, data: string): void {
        if (!node) {
            node = new TreeNode(key, data);
        } else if (key < node.key) {
            this.addChild(node.left, key, data);
        } else {
            this.addChild(node.right, key, data);
        }
    }

    searchKey(node: TreeNode | undefined, key: number): TreeNode | undefined {
        if (node) {
            if (node.key === key) {
                return node;
            }
            if (key < node.key) {
                return this.searchKey(node.left, key);
            }
            return this.searchKey(node.right, key);
        }
    }

    parentOfDeletingNode(node: TreeNode, key: number): TreeNode | undefined {
        if (node) {
            if (node.left) {
                if (node.left.key === key) {
                    return node;
                }
            } else if (node.right) {
                if (node.right.key === key) {
                    return node;
                }
            } else if (key < node.key) {
                return this.searchKey(node.left, key);
            } else {
                return this.searchKey(node.right, key);
            }
        }
    }


    hasChildren(node: TreeNode): boolean {
        if (node.left || node.right) {
            return true;
        }
        return false;
    }

    deleteTreeNode(key: number): void {
        const parent: TreeNode | undefined = this.parentOfDeletingNode(this.head, key);
        const toDelete: TreeNode | undefined = this.searchKey(this.head, key);

        if (toDelete && parent) {
            if (toDelete.left) {
                this.deleteTreeNode(toDelete.left.key);
                parent.left = undefined;
            }
            if (toDelete.right) {
                this.deleteTreeNode(toDelete.right.key);
                parent.right = undefined;
            }
            if (parent.left === toDelete) {
                parent.left = undefined;
            } else if (parent.right === toDelete) {
                parent.right = undefined;
            }
        }
    }

    printTree(node: TreeNode): void {
        if (node) {
            if (node.left) {
                this.printTree(node.left);
            }
            console.log(node.key);
            if (node.right) {
                this.printTree(node.right);
            }
        }
    }
}

console.log(22);
const tree: Tree = new Tree(new TreeNode(5, "something"));
tree.addChild(tree.head, 2, "another");
tree.addChild(tree.head, 7, "another");
tree.printTree(tree.head);
console.log(33);
