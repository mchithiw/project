$(function () {

	//variable to track hash changes (temp solution)
	currHash = "";
	
	//initially hide book container
	$(".container-singe").hide();

	$.ajax({
			url: "http://it-ebooks-api.info/v1/search/modern%20web",
			dataType: 'json'
		}).done(function(data) {

			//counter to track # of results
			var counter = 0;

			//loop through all book objects
			$.each(data.Books, function(key, value) {

				//get data from file
				var title = value.Title;
				var subTitle = value.SubTitle;
				var desc = value.Description;
				var img = value.Image;
				var isbn = value.isbn;
				var bookId = value.ID;

				//form list element for each book
				var li = "<li class=\"book\" id=\"" + isbn + "\"></li>";
				$(".main-list").append(li);

				var id = "#" + isbn;

				//create book-specific elements to append to li
				if (typeof title != "undefined")
				{
					var bookTitle = "<p class=\"book-title\" id=\"" + bookId + "\"> <span class=\"book-title-text\"> " + title + " </span> </p>";
					$(id).append(bookTitle);
				}

				if (typeof subTitle != "undefined")
				{
					var bookSub = "<p class=\"book-subtitle\"> - " + subTitle + "</p>";
					$(id).append(bookSub);
				}

				if (typeof img != "undefined")
				{
					var bookImg = "<img class=\"book-img\" alt=\"Book Image\" src=\"" + img + "\"> </img>";
					$(id).append(bookImg);
				}

				if (typeof desc != "undefined")
				{
					var bookDesc = "<p class=\"book-desc\">" + desc + "</p>";
					$(id).append(bookDesc);
				}

				if (typeof isbn != "undefined")
				{
					var bookIsbn = "<p class=\"book-isbn\"> ISBN: " + isbn + "</p>";
					$(id).append(bookIsbn);
				}

				//unique isbn identifier for each li element to append other elements

				counter++;
				
			});

			var numResults = "<p class=\"num-results\">" + counter + " results </p>";

			$(".main-list").prepend(numResults);

			//on title click, render individual book page
			$(".book-title-text").click(function() {

				var id = $(this).parent().attr('id');
				renderBook(id);

			});

		});

	function renderList()
	{

		$(".container-all").show();
		$(".container-single").hide();

		//change title
		$(".title").html("Search Results - Modern Web");

		//set hash to home
		currHash = "home";
	}

	function renderBook(bookID)
	{

			//hide main list and show book container
			$(".container-all").hide();
			$(".container-single").show();

			//clear content containers
			$(".main").html("");

			window.location.hash = bookID;
			currHash = bookID;

			//url formed from clicked ID
			var urlFinal = "http://it-ebooks-api.info/v1/book/" + bookID;

			//ajax call to get book data
			$.ajax({
			url: urlFinal,
			dataType: 'json'
			}).done(function(value) {


				//get data from file
				var title = value.Title;
				var subTitle = value.SubTitle;
				var desc = value.Description;
				var img = value.Image;
				var isbn = value.ISBN;
				var author = value.Author;
				var pages = value.Page;
				var year = value.Year;
				var publisher = value.Publisher;
				var download = value.Download;

				//change title
				$(".title").html(title);

				//form list element for each book
				//var content = "<div class=\"book\" id=\"" + isbn + "\"></div>";
				//$(".main-list").append(content);

				var left = ".main-img";
				var right = ".main-content";

				//create book-specific elements to append to li
				if (typeof title != "undefined")
				{
					var bookTitle = "<p class=\"book-title-single\">" + title + "</p>";
					$(right).append(bookTitle);
				}

				if (typeof subTitle != "undefined")
				{
					var bookSub = "<p class=\"book-subtitle-single\">" + subTitle + "</p>";
					$(right).append(bookSub);
				}

				if (typeof img != "undefined")
				{
					var bookImg = "<img class=\"book-img-single\" alt=\"Book Image\" src=\"" + img + "\"> </img>";
					$(left).append(bookImg);
				}

				if (typeof desc != "undefined")
				{
					var bookDesc = "<p class=\"book-desc-single\">" + desc + "</p>";
					$(right).append(bookDesc);
					$(".book-desc-single").prepend("<p class=\"category\"> Book Description </p>");
				}

				if (typeof author != "undefined")
				{
					var bookAuthor = "<p class=\"book-author\"> <span class=\"details\"> Author: </span> " + author + "</p>";
					$(right).append(bookAuthor);
					$(".book-author").prepend("<p class=\"category\"> Book Details </p>");
				}

				if (typeof publisher != "undefined")
				{
					var bookPub = "<p class=\"book-pub\"> <span class=\"details\"> Publisher: </span> " + publisher + "</p>";
					$(right).append(bookPub);
				}

				if (typeof isbn != "undefined")
				{
					var bookIsbn = "<p class=\"book-isbn-single\"> <span class=\"details\"> ISBN: </span> " + isbn + "</p>";
					$(right).append(bookIsbn);
				}

				if (typeof year != "undefined")
				{
					var bookYear = "<p class=\"book-year\"> <span class=\"details\"> Published: </span> " + year + "</p>";
					$(right).append(bookYear);
				}

				if (typeof pages != "undefined")
				{
					var bookPages = "<p class=\"book-pages\"> <span class=\"details\"> Pages </span> " + pages + "</p>";
					$(right).append(bookPages);
				}

				if (typeof download != "undefined")
				{
					var bookDownload = "<a class=\"book-download\" href=\"" + download + "\"> Download </a>";
					$(right).append(bookDownload);
				}


		});
	}

	//gets current hash 
	function getLatestHash()
	{
		var hash = window.location.hash.replace("#", "");

		if (hash !== currHash)
		{
			if (hash.length === 0)
			{
				if (currHash !== "home")
					renderList();
			}
			else
			{
				renderBook(hash);
			}
		}
		
	}

	//checks for current hash every .25 secs to update the page if needed
	setInterval(getLatestHash, 250);


});
