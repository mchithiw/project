$(function () {

	$.ajax({
			url: "book.json",
			dataType: 'json'
		}).done(function(data) {

                var value = data.volumeInfo;
        
				//get data from file
				var title = value.title;
                var subtitle = value.subtitle;
                var authors = value.authors;
                var publisher = value.publisher;
                var year = value.publishedDate;
                var description = value.description;
                var isbn10 = value.industryIdentifiers[0].identifier;
                var isbn13 = value.industryIdentifiers[1].identifier;
                var pageCount = value.pageCount;
                var dimH = value.dimensions.height;
                var dimW = value.dimensions.width;
                var dimT = value.dimensions.thickness;
                var categories = value.categories;
                var rating = value.averageRating;
                var ratingCt = value.ratingsCount;
                var mature = value.maturityRating;
                var version = value.contentVersion;
                var img = value.imageLinks.small;
                var url = value.canonicalVolumeLink;
                var readerUrl = data.accessInfo.webReaderLink;
        
                var listPrice = data.saleInfo.listPrice.amount;
                var currencyCode = data.saleInfo.listPrice.currencyCode;
        
                var retailPrice = data.saleInfo.retailPrice.amount;
                var retailCode = data.saleInfo.retailPrice.currencyCode;
                var buyUrl = "https://play.google.com/store/books/details?id=Wfan6L9RGgYC&rdid=book-Wfan6L9RGgYC&rdot=1&source=gbs_atb&pcampaignid=books_booksearch_atb";
                var imgSmall = "http://books.google.com/books/content?id=Wfan6L9RGgYC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71PvthuvL85Nua0RkEze1me1QZpXyUVCT8gVMicfpOnDWb4YuSFSE1WxyqQcsqhDz-FUYgai4Nos2629xr6CEkhvqfWBmvQleMWE-MxDRNuOusqw8WYyz15UkfxAQNcZC0irp7F&source=gbs_api";
        
                //no buy links yet
                
                var left = ".main-content";
                var right = ".main-img";

        
				//create book-specific elements to append to dom
                
                var bookTitle = "<p class=\"book-title\"> <a href=\"" + url + "\">" + title + "</a> </p>";
                $(left).append(bookTitle);
        
                var bookSub = "<p class=\"book-subtitle\">" + subtitle + "</p>";
                $(left).append(bookSub);
        
                var bookDesc = "<p class=\"book-description\">" + description + "</p>";
                $(left).append(bookDesc);
        
                if (typeof authors != "undefined")
                {
                    var authorAll = authors.toString();
                    var bookAuthors = "<p class=\"book-authors\"> Author(s): " + authorAll + "</p>";
                    $(left).append(bookAuthors);
                }
        
                var bookPub = "<p class=\"book-publisher\"> Published by: " + publisher + " in " + year + "</p>";
                $(left).append(bookPub);
                
                var bookIsbns = "<p class=\"book-isbns\"> Isbn10: " + isbn10 + ", Isbn13: " + isbn13 + "</p>";
                $(left).append(bookIsbns);
        
                if (typeof categories != "undefined")
                {
                    var bookCats = categories.toString();
                    var bookCategories = "<p class=\"book-categories\"> Categories: " + bookCats + "</p>";
                    $(left).append(bookCategories);
                }
        
                var bookInfo = "<p class=\"book-info\"> Page Count: " + pageCount + " pages, Dimensions: " + dimH + " x " + dimW + " x " + dimT + "</p>";
                $(left).append(bookInfo);
        
                var suitable;
                
                if (mature === "NOT_MATURE")
                {
                    suitable = "This book is suitable for all ages.";
                } else
                    suitable = "This book is only suitable for adults.";
        
                var bookSuitable = "<p class=\"book-suitable\">" + suitable + "</p>";
                $(left).append(bookSuitable);
        
                var bookRatings = "<p class=\"book-ratings\"> Rated " + rating + " out of 5.0 by " + ratingCt + " reviewers. </p>";
                $(left).append(bookRatings);
        
                var bookVersion = "<p class=\"book-version\"> Version: " + version + "</p>";
                $(left).append(bookVersion);
        
                var bookImg = "<img class=\"book-img\" src=\"" + img + "\"/>";
                $(right).append(bookImg);
        
                var bookImgSmall = "<img class=\"book-img-small\" src=\"" + imgSmall + "\"/>";
                $(right).append(bookImgSmall);
        
        
                var bookBuy = "<a href=\"" + buyUrl + "\"> <button class=\"book-buy\"> Buy Book </button> </a>";
                $(right).append(bookBuy);
        
                var bookSample = "<p class=\"book-sample\"> <a href=\"" + readerUrl + "\"> Preview this book </a> </p>";
                $(right).append(bookSample);
        
        
                var bookPrice = "<p class=\"book-price\"> Book Price: " + listPrice + " " + currencyCode + "</p>";
                $(right).append(bookPrice);
        
                var bookRetailPrice = "<p class=\"book-price\"> Retail Price: " + retailPrice + " " + retailCode + "</p>";
                $(right).append(bookRetailPrice);
                
                

		});

    });
