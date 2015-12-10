/*
  This function uses Handlebars to populate a template from the passed in JSON data structure.

  Parameters:
    hbr - a string containing the handlebars template
    data - an optional object that can be referenced within the template
  
  Date: 12/9/15
  Author: Lee Grey
*/

function populateTemplate(hbr, data) {
  hbr = hbr.trim().replace(/\\"/g, '"').replace(/\\n/g, '').replace(/\\t/g, '')
  var template = Handlebars.compile(hbr)
  
  if( data && typeof data == 'string' ) {
    data = JSON.parse(data)
  } else if( !data ) {
    data = {}
  }
  
  var output = template(data)											// fill in the template
  
  return output
}
