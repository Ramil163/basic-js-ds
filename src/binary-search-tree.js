const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

module.exports = class BinarySearchTree {
  constructor() {
    this.rootOfTree = null;
  }
  root() {
    if (!this.rootOfTree) {
      return null;
    } else {
      return this.rootOfTree;
    }
  }
  add(data) {
    this.rootOfTree = addIn(this.rootOfTree, data);

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
    return searchIn(this.rootOfTree, data);
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

  find(data) {
    return findNode(this.rootOfTree, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        return node;
      }
      return data < node.data
        ? findNode(node.left, data)
        : findNode(node.right, data);
    }
  }

  remove(data) {
    this.rootOfTree = removeNode(this.rootOfTree, data);

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
    if (!this.rootOfTree) {
      return;
    }
    let node = this.rootOfTree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootOfTree) {
      return;
    }
    let node = this.rootOfTree;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
};
