$(document).ready(function() {
  function init () {
    var href, $lastLink;

    $("a.toggle-search").remove();

    $lastLink = $(".custom-link:last");
    href = $lastLink.prop("href");
    $lastLink.prop("href", href);
    $("a").filter(":contains('Human rights')").remove();

  }
  init();
  require(["gitbook"], function (gitbook) {
    gitbook.events.bind("page.change", init);
  });
});