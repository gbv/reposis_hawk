
$(document).ready(function() {

  // spam protection for mails
  $('span.madress').each(function(i) {
      var text = $(this).text();
      var address = text.replace(" [at] ", "@");
      $(this).after('<a href="mailto:'+address+'">'+ address +'</a>')
      $(this).remove();
  });

  // activate empty search on start page
  $("#hawk-searchMainPage").submit(function (evt) {
    $(this).find(":input").filter(function () {
          return !this.value;
      }).attr("disabled", true);
    return true;
  });

  // replace placeholder USERNAME with username
  var userID = $("#currentUser strong").html();
  var newHrefTest = 'https://reposis-test.gbv.de/hawk/servlets/solr/select?q=createdby:' + userID + '&fq=objectType:mods';
  $("a[href='https://reposis-test.gbv.de/hawk/servlets/solr/select?q=createdby:USERNAME']").attr('href', newHrefTest);
  var newHref = 'https://publikationsserver.hawk.de/servlets/solr/select?q=createdby:' + userID + '&fq=objectType:mods';
  $("a[href='https://publikationsserver.hawk.de/servlets/solr/select?q=createdby:USERNAME']").attr('href', newHref);

});
