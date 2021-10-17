const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {


   
  class listLink {
    constructor() {
      this.head = null;
      this.length = 0;
    }
    deleteEl(pos) {
      if (pos < 0 || this.length <= pos) {
        return null;
      }
      let current = this.head;
      if (pos === 0) {
        this.head = current.next;
      } else {
        let prev = null;
        let index = 0;
        while (index < pos) {
          prev = current;
          current = current.next;
          index++;
        }
        prev.next = current.next;
      }
      this.length--;
      return current.value;
    }

    deleteElemByVal(x) {
      this.deleteEl(this.indexOf(x));
    }
    indexOf(a) {
      let current = this.head;
      let index = 0;

      while (current) {
        if (current.value === a) {
          return index;
        }
        current = current.next;
        index++;
      }
      return -1;
    }
  }
};
