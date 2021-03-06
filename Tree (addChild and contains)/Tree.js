//Implement addChild and contains methods for a Tree class

var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};
treeMaker.methods = {};
treeMaker.methods.addChild = function(value){
  var node = treeMaker(value);
  this.children.push(node);
}
treeMaker.methods.contains = function(value){
  // var result = false;
  if (this.value === value) {
    return true;
  }
  else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(value)) {
        return true;
      }
    }
  }
  return false;
}
