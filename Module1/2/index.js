$(function () {


	$.ajax({
			url: "http://it-ebooks-api.info/v1/book/2563063616",
			dataType: 'json',
			success: function(value) {

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

			//form list element for each book
			//var content = "<div class=\"book\" id=\"" + isbn + "\"></div>";
			//$(".main-list").append(content);

			$(".title").html(title);

			var left = ".main-img";
			var right = ".main-content";

			//create book-specific elements to append to li
			if (typeof title != "undefined")
			{
				var bookTitle = "<p class=\"book-title\">" + title + "</p>";
				$(right).append(bookTitle);
			}

			if (typeof subTitle != "undefined")
			{
				var bookSub = "<p class=\"book-subtitle\">" + subTitle + "</p>";
				$(right).append(bookSub);
			}

			if (typeof img != "undefined")
			{
				var bookImg = "<img class=\"book-img\" alt=\"Book Image\" src=\"" + img + "\"> </img>";
				$(left).append(bookImg);
			}

			if (typeof desc != "undefined")
			{
				var bookDesc = "<p class=\"book-desc\">" + desc + "</p>";
				$(right).append(bookDesc);
				$(".book-desc").prepend("<p class=\"category\"> Book Description </p>");
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
				var bookIsbn = "<p class=\"book-isbn\"> <span class=\"details\"> ISBN: </span> " + isbn + "</p>";
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

		}
	});

});
