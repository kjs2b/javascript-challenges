//Implement the function getClosestCommonAncestor and
//getAncestorPath in the Tree class

var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

//***** BEGIN ADDED CODE *****
Tree.prototype.getClosestCommonAncestor = function(one, two){
  var onePath = this.getAncestorPath(one);
  var twoPath = this.getAncestorPath(two);
  if (!onePath || !twoPath) {
      return null;
  }
  for (i = onePath.length - 1; i >= 0; i--) {
    if (twoPath.includes(onePath[i])) {
      return onePath[i];
    }
  }
  return null;
}

Tree.prototype.getAncestorPath = function(target){
  var results = null;
  var constructPath = function (tree, path) {
    path.push(tree);
    debugger;
    if (tree === target) {
      results = path;
      return;
    } else {
       tree.children.forEach(function (child) {
        aPath = path.slice(0);
        constructPath(child, aPath);
      })
    }
  }
  constructPath(this, []);
  return results;
}
//***** END ADDED CODE *****

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};