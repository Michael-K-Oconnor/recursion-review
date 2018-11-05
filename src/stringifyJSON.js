// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  var results = '';

  // check if string
  if (typeof obj === 'string') {
    // if string, append to results with quotes
    results += '"' + obj + '"';

  // check not a string, object, array
  } else if (typeof obj !== 'object' || obj === null) {
    // if not any of the above, convert to string and add to result
    results += '' + obj;
  
  // check if array
  } else if (Array.isArray(obj)) {
    // if array, iterate through all array elements and stringify each
    results += '[';
    // format subResult to JSON, with brackets
    for (var i = 0; i < obj.length; i++) {
        results += stringifyJSON(obj[i])
        if (i !== obj.length-1) {
            results += ',';
        }
    }
    results += ']';
  
  } else {
    results += '{';
    var invalidValues = 0;
    for (var key in obj) {
      if( obj[key] === undefined || typeof obj[key] === 'function'){
          invalidValues++;
          continue;
      }
      results += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
    }
    if( Object.keys(obj).length-invalidValues > 0 ){
      results = results.substring(0,results.length-1);
    }
    results += '}';
  }
    


  // check if object
    // if object, iterate through all keys and call stringify on values
    // format subResult to JSON, with braces and stringifyied key

  return results;

};
