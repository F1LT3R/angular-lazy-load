define(function (routes) {

  var cached = {
    // Stores previously loaded CSS paths
  };


  function load (url) {

    // Do not load the same CSS file multiple times
    if (cached[url]) {
      return;
    }

    // Create CSS tag and append to HTML document
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