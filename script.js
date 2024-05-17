var quotes = [
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe" },
    { quote: "So many books, so little time.", author: "Frank Zappa" }, {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein"
    },
    { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M. Baruch" },
    {
        quote: "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.", author: "William W. Purkey"
    },
    { quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", author: "J.K. Rowling, Harry Potter and the Goblet of Fire" },
    {
        quote: "Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend", author: "Albert Camus"
    },
    { quote: "If you tell the truth, you don't have to remember anything.", author: " Mark Twain" },
    { quote: "Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .", author: "C.S. Lewis, The Four Loves" },
    { quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
    { quote: "A friend is someone who knows all about you and still loves you.", author: " Elbert Hubbard" },
    { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" }
];


var availableQuotes = quotes.slice();

function getRandomQuote() {
    if (availableQuotes.length === 0) {
        availableQuotes = quotes.slice();
    }

    var randomIndex = Math.floor(Math.random() * availableQuotes.length);
    var selectedQuote = availableQuotes.splice(randomIndex, 1)[0];

    return selectedQuote;
}

function generateQuote() {
    if (availableQuotes.length === 0) {
        availableQuotes = quotes.slice();
    }
    var quoteObject = getRandomQuote();
    document.getElementById('quote').innerText = quoteObject.quote;
    document.getElementById('author').innerText = "― " + quoteObject.author;
}

document.getElementById('new-quote').addEventListener('click', generateQuote);

generateQuote();