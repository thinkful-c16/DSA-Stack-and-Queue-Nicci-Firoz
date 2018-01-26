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

  peek(){
    const node = this.top;
    return node.data;
  }

  display(){
    let node = this.top;
    let list = [];

    if(this.top === null){
      return 'The stack is empty';
    }

    while(node !== null){
      list.push(node.data);
      node = node.next;
    }
    return list;
  }
}

function main() {

  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(starTrek.display());
  starTrek.pop();
  starTrek.pop();
  starTrek.push('Scotty');
  
  
  //console.log(JSON.stringify(starTrek, null, 2));
  console.log(starTrek.display());

}

main();
