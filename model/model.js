// THIS INFORMATION SIMULATES GETTING DATA FROM A DATABASE
var homeContent = ``;
var aboutContent = ``;
var menuContent = ``;
var contactContent = ``;

// THIS FUNCTION IS BEING CALLED BY app.js which has the page name
export function modelPageName(pgName) {
  console.log(pgName);

  $("#app").html(eval(pgName));
}
