'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if(this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop(){
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

// peek(){
//   const node = this.top;
//   return node.data;
// }

// display(){
//   let node = this.top;
//   let list = [];

//   if(this.top === null){
//     return 'The stack is empty';
//   }

//   while(node !== null){
//     list.push(node.data);
//     node = node.next;
//   }
//   console.log(list);
// }

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stack = new Stack();

  for(let i = 0; i < s.length; i++){
    stack.push(s[i]);
  }

  for(let j = 0; j < s.length; j++){
    if(stack.pop() !== s[j]){
      return false;
    }
  }
  return true;
}

function main() {

  // let starTrek = new Stack();
  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('McCoy');
  // starTrek.push('Scotty');
  // console.log(starTrek.display());
  // starTrek.pop();
  // starTrek.pop();
  // starTrek.push('Scotty');
  
  
  console.log(is_palindrome('dad'));
  console.log(is_palindrome('A man, a plan, a canal: Panama'));
  console.log(is_palindrome('1001'));
  console.log(is_palindrome('Tauhida'));

}

main();
