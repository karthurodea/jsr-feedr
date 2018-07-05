/*
  Please add all Javascript code to this file.
*/

var delayInMilliseconds = 1000; //1 second

$(document).ready(getMashable);
$(document).on("click","#wired", getWired);
$(document).on("click","#mash", getMashable);
$(document).on("click","#tc", getTechCrunch);

//click events to display/hide the pop up

$(document).on("click",".articleContent", function () {
    document.getElementById("popUp").classList.remove("hidden");
    setTimeout(function() {
  		document.getElementById("popUp").classList.remove("loader");
	}, delayInMilliseconds);
	var articlePopUp = ` <a href="#" class="closePopUp">X</a>
          <div class="container">
            <h1>${title}</h1>
            <p>
              "${description}"
            </p>
            <a href="${link}" class="popUpAction" target="_blank">Read more from source</a>
          </div>`;
    $("#popUp").empty();
    $("#popUp").append(articlePopUp);
});

$(document).on("click",".closePopUp", function () {
	document.getElementById("popUp").classList.add("hidden");
    document.getElementById("popUp").classList.add("loader");
});

//GET request for top headlines from Mashable

function getMashable() {
var promiseMash = new Promise(function(resolve, reject) {
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=mashable&apiKey=ac654934dda44a75b384222cb2275816');
xhr.onload = function() {
  if (xhr.status === 200) {
    resolve(JSON.parse(xhr.responseText));
  }
  else {
    reject(Error("It broke"+ xhr.status));
  }
 }
xhr.send();
});


promiseMash.then(function(result) {
	$( "#main" ).empty();
	for (var i = 0; i < result.articles.length; i++){
		var title = result.articles[i].title;
		var author = result.articles[i].author;
		var source = result.articles[i].source.name;
		var description = result.articles[i].description;
		var link = result.articles[i].url;
		if (typeof result.articles[i].urlToImage == 'string'){
			var image = result.articles[i].urlToImage;
		} else {
			var image = "images/article_placeholder_1.jpg";
		};
		
		var articleTemplate = `<article class="article">
            <section class="featuredImage">
              <img src="${image}" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>${title}</h3></a>
                <h6>${author}</h6>
            </section>
            <section class="impressions">
              ${source}
            </section>
            <div class="clearfix"></div>
          </article>`;
    	$("#main").append(articleTemplate);
	}
 });
};

//GET request for top headlines from TechCrunch

function getTechCrunch() {
var promiseCrunch = new Promise(function(resolve, reject) {
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ac654934dda44a75b384222cb2275816');
xhr.onload = function() {
  if (xhr.status === 200) {
    resolve(JSON.parse(xhr.responseText));
  }
  else {
    reject(Error("It broke"+ xhr.status));
  }
 }
xhr.send();
});

promiseCrunch.then(function(result) {
	$( "#main" ).empty();
	for (var i = 0; i < result.articles.length; i++){
		var title = result.articles[i].title;
		var author = result.articles[i].author;
		var source = result.articles[i].source.name;
		var description = result.articles[i].description;
		var link = result.articles[i].url;
		if (typeof result.articles[i].urlToImage == 'string'){
			var image = result.articles[i].urlToImage;
		} else {
			var image = "images/article_placeholder_1.jpg";
		};
		
		var articleTemplate = `<article class="article">
            <section class="featuredImage">
              <img src="${image}" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>${title}</h3></a>
                <h6>${author}</h6>
            </section>
            <section class="impressions">
              ${source}
            </section>
            <div class="clearfix"></div>
          </article>`;
    	$("#main").append(articleTemplate);
	}
 });
};
//GET request for top headlines from Wired

function getWired() {
var promiseWire = new Promise(function(resolve, reject) {
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=wired&apiKey=ac654934dda44a75b384222cb2275816');
xhr.onload = function() {
  if (xhr.status === 200) {
    resolve(JSON.parse(xhr.responseText));
  }
  else {
    reject(Error("It broke"+ xhr.status));
  }
 }
xhr.send();
});

promiseWire.then(function(result) {
	$( "#main" ).empty();
	for (var i = 0; i < result.articles.length; i++){
		var title = result.articles[i].title;
		var author = result.articles[i].author;
		var source = result.articles[i].source.name;
		var description = result.articles[i].description;
		var link = result.articles[i].url;
		if (typeof result.articles[i].urlToImage == 'string'){
			var image = result.articles[i].urlToImage;
		} else {
			var image = "images/article_placeholder_1.jpg";
		};
		
		var articleTemplate = `<article class="article">
            <section class="featuredImage">
              <img src="${image}" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>${title}</h3></a>
                <h6>${author}</h6>
            </section>
            <section class="impressions">
              ${source}
            </section>
            <div class="clearfix"></div>
          </article>`;
    	$("#main").append(articleTemplate);
	}
 });
};
// when I call the API, I'll retrieve the information from JSON object, iterate over JSON object to pull out the things I need to populate my DOM.

// If you're going write something, explain what you're doing.  

// a good goal for Sat:  poll an API, populate the DOM for one thing.  