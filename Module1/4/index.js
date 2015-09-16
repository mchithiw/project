$(function () {

	$.ajax({
			url: "book.json",
			dataType: 'json'
		}).done(function(data) {

                var value = data["ISBN:1593274874"];
        
				//get data from file
				var title = value.title;
                var subtitle = value.subtitle;
                var url = value.url;
				var isbn13 = value.identifiers.isbn_13;
                var isbn10 = value.identifiers.isbn_10;
                var publishers = value.publishers;
                var author = value.authors;
                var place = value.publish_places.name;
                var img = value.cover.medium;
                var imgL = value.cover.large;
                var year = value.publish_date;
                
                var left = ".main-content";
                var right = ".main-img";
        
				//create book-specific elements to append to li
				if (typeof title != "undefined")
				{
					var bookTitle = "<p class=\"book-title\"> <a href=\"" + url + "\" class=\"book-title-text\"> " + title + " </a> </p>";
					$(left).append(bookTitle);
				}
        
                if (typeof subtitle != "undefined")
                {
                    var bookSub = "<p class=\"book-subtitle\">" + subtitle + "</p>";
                    $(left).append(bookSub);
                }
                
                if (typeof author != "undefined")
                {
                    //var authors = author.toString();
                    var name = author[0].name;
                    var url = author[0].url;
                    var bookAuthor = "<p class=\"book-author\"> Author(s): <a href=\"" + url + "\" >" + name + " </a> </p>";
                    $(left).append(bookAuthor);
                    $(".book-author").prepend("<h2 class=\"details\"> Book Details </h2>");
                }
        
                if (typeof publishers != "undefined")
                {
                    var publisher = publishers[0].name;
                    
                    var bookPublisher = "<p class=\"book-publish\"> First published by " + publisher + " in " + year + " at " + place + "</p>";
                    $(left).append(bookPublisher);
                }
        
                if (typeof isbn13 != "undefined" && typeof isbn10 != "undefined")
                {
                    var isbns13 = isbn13.toString();
                    var isbns10 = isbn10.toString();
                    var bookIsbn = "<p class=\"book-isbn\"> Isbn-10(s): " + isbns10 + ", Isbn-13(s): " + isbns13 + " </p>";
                    $(left).append(bookIsbn);
                    
                }
        
                var toc = "<ul class=\"toc\"> </ul>";
                $(left).append(toc);
        
                $.each(value.table_of_contents, function(key, v) {
                
                    var tocTitle = v.title;
                    var tocLi = "<li class=\"toc-li\"> " + tocTitle + "</li>";
                    $(".toc").append(tocLi);
                });
        
        if (value.table_of_contents.length > 0)
            $(".toc").prepend("<h2 class=\"details\"> Table Of Contents </h2>");
        
            if (typeof img != "undefined")
            {
                var bookImg = "<img src=\"" + img + "\" class=\"book-img\"/>";
                $(right).append(bookImg);
            }


		});

    });
