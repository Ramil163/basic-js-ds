const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  root() {
    // let node = this.data;

    this.root = rootNode(this.root);

    function rootNode(node, data) {
      if (!node) {
        return null;
      }
    }
  }

  add(data) {
    this.root = addIn(this.root, data);

    function addIn(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addIn(node.left, data);
      } else {
        node.right = addIn(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchIn(this.root, data);
    function searchIn(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      } else {
        return data < node.data
          ? searchIn(node.left, data)
          : searchIn(node.right, data);
      }
    }
  }

  find(data) {}

  remove(data) {
    this.root = removeNode(this.root, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return;
    }
    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
};
