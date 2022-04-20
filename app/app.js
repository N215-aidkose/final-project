import * as MODEL from "../model/model.js";
// Now we have app.js has access to model.js //
function route() {
  let hashTag = window.location.hash;
  let pageName = hashTag.replace("#", "");
  let pageContent = pageName + "Content";

  // LISTENING FOR CLICKS
  if (pageName == "") {
    pageContent = "homeContent";
  }

  // SENDS IT TO MODEL
  MODEL.modelPageName(pageContent);
}

function initListeners() {
  //.on is a function, and it works like this. Whenever the hashtag changes, we execute the route function//
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initListeners();
});
