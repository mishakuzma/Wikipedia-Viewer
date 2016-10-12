
// function will display the data from a wiki page. (Put a new function to put data in rows)
function displayWiki(wikiJson) {
  var pagesArray = wikiJson["query"]["pageids"];
  for(var i = 0; i < pagesArray.length; i++){
    var title = wikiJson["query"]["pages"][pagesArray[i]]["title"];
    var extract = wikiJson["query"]["pages"][pagesArray[i]]["extract"];
    $("#results").html("")
    $("#results").append(
    	"<div class=row><a href=http://en.wikipedia.org/?curid="+ 
    	pagesArray[i]+">" + title + "</a> " + extract + "</div>");
  }
}
