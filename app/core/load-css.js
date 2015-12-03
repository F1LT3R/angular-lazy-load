define(function (routes) {

  var cached = {

  };



  function load (url) {

    if (cached[url]) {
      return;
    }

    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
    cached[url] = true;
  }



  var LoadCss = {
    load: load,
  };

  return LoadCss;
});