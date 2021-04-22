"use strict";
var TreeNode = /** @class */ (function () {
    function TreeNode(key, data) {
        this.key = key;
        this.data = data;
        this.left = undefined;
        this.right = undefined;
    }
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree(head) {
        this.head = head;
    }
    Tree.prototype.addChild = function (node, key, data) {
        if (!node) {
            node = new TreeNode(key, data);
        }
        else if (key < node.key) {
            this.addChild(node.left, key, data);
        }
        else {
            this.addChild(node.right, key, data);
        }
    };
    Tree.prototype.searchKey = function (node, key) {
        if (node) {
            if (node.key === key) {
                return node;
            }
            if (key < node.key) {
                return this.searchKey(node.left, key);
            }
            return this.searchKey(node.right, key);
        }
    };
    Tree.prototype.parentOfDeletingNode = function (node, key) {
        if (node) {
            if (node.left) {
                if (node.left.key === key) {
                    return node;
                }
            }
            else if (node.right) {
                if (node.right.key === key) {
                    return node;
                }
            }
            else if (key < node.key) {
                return this.searchKey(node.left, key);
            }
            else {
                return this.searchKey(node.right, key);
            }
        }
    };
    Tree.prototype.hasChildren = function (node) {
        if (node.left || node.right) {
            return true;
        }
        return false;
    };
    Tree.prototype.deleteTreeNode = function (key) {
        var parent = this.parentOfDeletingNode(this.head, key);
        var toDelete = this.searchKey(this.head, key);
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
            }
            else if (parent.right === toDelete) {
                parent.right = undefined;
            }
        }
    };
    Tree.prototype.printTree = function (node) {
        if (node) {
            if (node.left) {
                this.printTree(node.left);
            }
            console.log(node.key);
            if (node.right) {
                this.printTree(node.right);
            }
        }
    };
    return Tree;
}());
console.log(22);
var tree = new Tree(new TreeNode(5, "something"));
tree.addChild(tree.head, 2, "another");
tree.addChild(tree.head, 7, "another");
tree.printTree(tree.head);
console.log(33);
