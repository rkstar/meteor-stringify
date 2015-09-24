Stringify = function(object){
  var properties = []
  _.keys(object).map(function(key){
    var value = object[key],
      safe = ''
    if( (value instanceof Object)
      || (value instanceof Array) ){
      safe = Stringify(value)
    } else {
      safe = (isNaN(value)) ? '"'+value.replace(/"/g, '\"')+'"' : value
    }
    properties.push('{'+key+':'+safe+'}')
  })
  return properties.join(',')
}