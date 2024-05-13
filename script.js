var floatingButtonContainer = document.querySelector('.floating-button-div');
var scrollY = window.scrollY;


window.addEventListener('scroll', function () {
    scrollY = window.scrollY;
    floatingButtonContainer.style.top = scrollY + window.innerHeight - 150 + 'px';
});

/*document.addEventListener('DOMContentLoaded', function () {
    // Fetch the JSON file
    fetch('quotes.json')
        .then(response => response.json())
        .then(data => {
            // Access the quotes array from the JSON data
            const quotesArray = data.quotes;

            // Get the <h3> element by its id
            const quotesElement = document.getElementById('quotes');

            // Update the content of <h3> with a random quote and author from the array
            if (quotesArray && quotesArray.length > 0) {
                const randomIndex = Math.floor(Math.random() * quotesArray.length);
                const randomQuoteObject = quotesArray[randomIndex];
                const quoteText = randomQuoteObject.quote;
                const authorName = randomQuoteObject.author;

                // Check if the author is "pandadevv"
                if (authorName === "pandadevv") {
                    const string = ["🕛", "🕧", "🕐", "🕜", "🕑", "🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢", "🕗", "🕣", "🕘", "🕤", "🕙", "🕥", "🕚", "🕦"];
                    var currentdate = new Date();
                    var time = Number((2 * (currentdate.getHours() + currentdate.getMinutes() / 60)).toFixed()) % 24;
                    tR += tp.date.now("LT ") + string[time];
                    // Use separate <span> elements for quote and emoji
                    quotesElement.innerHTML = `<span>${time}) + string[time]}</span><br><span>- ${authorName}</span>`;
                    console.log(time + string[time])
                } else {
                    // For other authors, use the default format
                    quotesElement.innerHTML = `<span>${quoteText}</span><br><span>- ${authorName}</span>`;
                }
            }
        })
        .catch(error => {
            console.error('Error fetching quotes:', error);
        });
});*/




function discord() {
    window.open(
        "https://github.com/wxnnvs", "_blank");
}