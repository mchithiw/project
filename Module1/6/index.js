$(function () {

	$.ajax({
			url: "amazon-book.xml",
			dataType: 'xml'
		}).done(function(data) {

                
                var url = $(data).find("DetailPageURL").text();
        
                var attr = $(data).find("ItemAttributes");
                var author = $(attr).find("Author").text();
                var binding = $(attr).find("Binding").text();
                var dec = $(attr).find("DeweyDecimalNumber").text();
                var condition = $(attr).find("Feature").eq(1).text();
                var isbn = $(attr).find("ISBN").text();
                var publisher = $(attr).find("Publisher").text();
                var pages = $(attr).find("NumberOfPages").text();
                var date = $(attr).find("PublicationDate").text();
                var title = $(attr).find("Title").text();
                var img = $(data).find("ImageSets").find("ImageSet").find("LargeImage").find("URL").text();
                var imgSmall = $(data).find("ImageSets").find("ImageSet").find("MediumImage").find("URL").text();
                var offer = $(data).find("OfferSummary");
                var price = $(offer).find("LowestNewPrice").find("FormattedPrice").text();
                var newCt = $(offer).find("TotalNew").text();
                var usedCt = $(offer).find("TotalUsed").text();
                var collectCt = $(offer).find("TotalCollectible").text();
                var refubCt = $(offer).find("TotalRefurbished").text();
                var buyUrl = $(data).find("MoreOffersUrl").text();
        
                var other = $(data).find("OfferListing");
                var offerPrice = $(other).find("Price").find("FormattedPrice").text();
                var offerSale = $(other).find("SalePrice").find("FormattedPrice").text();
                var offerSave = $(other).find("PercentageSaved").text();
                var avail = $(other).find("Availability").text();
                var eligibleS = $(other).find("IsEligibleForSuperSaverShipping").text();
                var eligibleP = $(other).find("IsEligibleForPrime").text();
        
                
        
        
                var left = ".main-content";
                var right = ".main-img";

        
				//create book-specific elements to append to dom
                
                var bookTitle = "<p class=\"book-title\"> <a href=\"" + url + "\">" + title + "</a> </p>";
                $(left).append(bookTitle);
        
        
                if (typeof author != "undefined")
                {
                    var bookAuthors = "<p class=\"book-authors\"> Author(s): " + author + "</p>";
                    $(left).append(bookAuthors);
                }
        
                var bookPub = "<p class=\"book-publisher\"> Published by: " + publisher + " on " + date + "</p>";
                $(left).append(bookPub);
                
                var bookIsbns = "<p class=\"book-isbns\"> Isbn: " + isbn + "</p>";
                $(left).append(bookIsbns);
        
                var bookInfo = "<p class=\"book-info\"> Page Count: " + pages + " pages, Cover: " + binding + ", Dewey Decimal: " + dec + "</p>";
        
                $(left).append(bookInfo);
        
                var bookInfo2 = "<p class=\"book-info\"> " + condition + "</p>";
                $(left).append(bookInfo2);

        
                var bookImg = "<img class=\"book-img\" src=\"" + img + "\"/>";
                $(right).append(bookImg);
        
                var bookImgSmall = "<img class=\"book-img-small\" src=\"" + imgSmall + "\"/>";
                $(right).append(bookImgSmall);
        
                var bookPrice = "<p class=\"book-price\"> Book Price: <span class=\"green\">" + price + "</span> </p>";
                $(left).append(bookPrice);
        
                var bookBuy = "<a href=\"" + buyUrl + "\"> <button class=\"book-buy\"> Buy Book </button> </a>";
                $(left).append(bookBuy);
                
                var forSale = "<p> New: " + newCt + ", Used: " + usedCt + ", Collectible: " + collectCt + ", Refurbished: " + refubCt + " </p>";
                $(left).append(forSale);
               
                $(left).append("<h3> Other Offers </h3>");
        
                if (eligibleS === "0")
                {
                    eligibleS = "Not eligible for Super Saver Shipping.";
                } else
                    eligibleS = "Super Saver Shipping is Eligible!";
                
                if (eligibleP === "0")
                {
                    eligibleP = "Not eligible for Amazon Prime.";
                } else
                    eligibleP = "Eligible for Amazon Prime!";
        
                var bookOffer = "<p> <span class=\"strike\"> " + offerPrice + "</span>, <span class=\"green\">" + offerSale + "</span> (Save: " + offerSave + "%)</p>";
        
                var bookBuy = "<a href=\"" + buyUrl + "\"> <button class=\"book-buy\"> Buy From Other </button> </a>";
                $(left).append(bookBuy);
                $(left).append(bookOffer);
        
                $(left).append("<p>" + eligibleP + " </p>");
                $(left).append("<p>" + eligibleS + "</p>");
                $(left).append("<p>" + avail + "</p>");
                

		});

    });
