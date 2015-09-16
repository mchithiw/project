$(function () {

	$.ajax({
			url: "openlibrary-search.json",
			dataType: 'json'
		}).done(function(data) {

			//counter to track # of results
			var counter = 0;

			//loop through all book objects
			$.each(data.docs, function(key, value) {

				//get data from file
				var title = value.title;
				var isbn = value.isbn;
                var lang = value.language;
                var edition = value.edition_count;
                var publisher = value.publisher;
                var author = value.author_name;
                var year = value.first_publish_year;
                var ebook = value.ebook_count_i;
            

				//form list element for each book
				var li = "<li class=\"book\" id=\"" + counter + "\"></li>";
				$(".main-list").append(li);

				var id = "#" + counter;

				//create book-specific elements to append to li
				if (typeof title != "undefined")
				{
					var bookTitle = "<p class=\"book-title\"> <span class=\"book-title-text\"> " + title + " </span> </p>";
					$(id).append(bookTitle);
				}
                
                if (typeof author != "undefined")
                {
                    var authors = author.toString();
                    var bookAuthor = "<p class=\"book-author\"> Author(s): " + authors + "</p>";
                    $(id).append(bookAuthor);
                } else 
                    $(id).append("<p class=\"book-author\"> Author: Unknown </p>");
                if (typeof publisher != "undefined")
                {
                    var publishers = publisher.toString();
                    var bookPublisher = "<p class=\"book-publish\"> First published by " + publishers + " in " + year + "</p>";
                    $(id).append(bookPublisher);
                }
                
                if (typeof edition != "undefined")
                {
                    var bookEdition = "<p class=\"book-edition\"> Edition: " + edition + "</p>";
                    $(id).append(bookEdition);
                }
                
                if (typeof ebook != "undefined")
                {
                    var bookEbook = "<span>  (eBook: " + ebook + ") </span>";
                    $(id).find(".book-edition").append(bookEbook);
                }
                
                if (typeof isbn != "undefined")
                {
                    var isbns = isbn.toString();
                    var bookIsbn = "<p class=\"book-isbn\"> Isbn(s): " + isbns + " </p>";
                    $(id).append(bookIsbn);
                    
                }
                          

				counter++;
				
			});

			var numResults = "<p class=\"num-results\">" + counter + " results </p>";

			$(".main-list").prepend(numResults); 

		});

    });
