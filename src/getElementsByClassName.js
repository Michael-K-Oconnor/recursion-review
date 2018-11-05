// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  //Tools
  //document.body, element.childNodes, element.classList

  //create storage NodeList
  var nodeList =  [];
  // define MasterNode 
  var body = document.body;

  var getElementsClassFn = function(masterNode){

    //check if classList contains className
    var classes = masterNode.classList;
    if( classes && classes.contains(className) ){
      nodeList.push(masterNode);
    }
      
    if( masterNode.hasChildNodes()){
      //create an array of childNodes
      var children = masterNode.childNodes; 
      
      //loop through childNodes
      for( var k = 0 ; k < children.length; k++ ){
        //recursively call fn.
        getElementsClassFn(children[k]);
      }
             
    }
  
  }

  getElementsClassFn(body);

  return nodeList;
};
