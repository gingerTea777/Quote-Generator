// Access Elements

// Main Page
let mainPage = document.querySelector(".main-page");
let typedText = document.querySelector("#typed-text");
let selectOption = document.querySelector("#moodSelectOption");
let generateBtn = document.querySelector("#generate-btn");


// Quote Page
let quotePage = document.querySelector(".quote-page");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let newQuoteBtn = document.querySelector("#new-quote-btn");


// Quote Database
const ambitiousQuote = [
    { text: "“Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action.”", author: "APJ Abdul Kalam"}, 

    { text: "“…failure is not about not succeeding. Rather it is about not putting in your best effort and not contributing, however modestly, to the common good.”", author: "Dr Vikram Sarabhai"}, 

    { text: "“The path from dreams to success does exist. May you have the vision to find it, the courage to get on to it, and the perseverance to follow it.”", author: "Kalpana Chawla"}, 

    { text: "“Reach high, for stars lie hidden in you. Dream deep, for every dream precedes the goal.”", author: "Rabindranath Tagore"},
];

const happyQuote = [
    { text: "“I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy.”", author: "Rabindranath Tagore"}, 

    { text: "“Happiness lies in the joy of achievement and the thrill of creative effort.”", author: "Franklin D. Roosevelt"}, 

    { text: "“What is done in love is done well.”", author: "Vincent Van Gogh"}, 

    { text: "“I must learn to be content with being happier than I deserve.”", author: "Jane Austen, Pride and Prejudice"},
];

const sadQuote = [
    { text: "“Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.”", author: "Khalil Gibran"}, 

    { text: "“The deeper that sorrow carves into your being, the more joy you can contain.”", author: "Khalil Gibran"}, 

    { text: "“Our doubts are traitors, and make us lose the good we oft might win, by fearing to attempt.”", author: "William Shakespeare"}, 

    { text: "“Melancholy is the happiness of being sad.”", author: "Victor Hugo"},
];

const thoughtfulQuote = [
    { text: "“A country's greatness lies in its undying ideals of love and sacrifice.”", author: "Sarojini Naidu"}, 

    { text: "“Accepting oneself does not preclude an attempt to become better.”", author: "Flannery O’ Connor"}, 

    { text: "“Nothing in life is to be feared; it is only to be understood.”", author: "Marie Curie"}, 

    { text: "“The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.”", author: "Carl Sagan, Cosmos"},
];

const mysteryQuote = [
    { text: "“Carpe diem. Seize the day, boys. Make your lives extraordinary.”  ", author: "Robin Williams as John Keating"}, 

    { text: "“That the powerful play goes on and you may contribute a verse. What will your verse be?”", author: "The Dead Poets Society"}, 

    { text: "“We don't read and write poetry because it's cute. We read and write poetry because we are members of the human race. And the human race is filled with passion. And medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.”", author: "The Dead Poets Society"}, 

    { text: "“I went to the woods because I wanted to live deliberately... I wanted to live deep and suck out all the marrow of life! To put to rout all that was not life… And not, when I came to die, discover that I had not lived…” ", author: "H.D.T."},
];




let quoteTheme = "";
let moodPicked = "";


// Functions
selectOption.addEventListener("change", function() {
    
    moodPicked = this.value;
    
    if(moodPicked === "happy") {
        quoteTheme = happyQuote;
        newQuoteBtn.style.backgroundColor = "#F4B701";
        newQuoteBtn.style.borderColor = "#F4B701"; 

    } else if (moodPicked === "sad") {
        quoteTheme = sadQuote;
        newQuoteBtn.style.backgroundColor = "#25597E";
        newQuoteBtn.style.borderColor = "#25597E";

    } else if (moodPicked === "ambitious") {
        quoteTheme = ambitiousQuote;
        newQuoteBtn.style.backgroundColor = "#B74315";
        newQuoteBtn.style.borderColor = "#B74315";

    } else if (moodPicked === "thoughtful") {
        quoteTheme = thoughtfulQuote;
        newQuoteBtn.style.backgroundColor = "#273B16";
        newQuoteBtn.style.borderColor = "#273B16";

    } else if (moodPicked === "???") {
        quoteTheme = mysteryQuote;
        newQuoteBtn.style.backgroundColor = "#825E4A";
        newQuoteBtn.style.borderColor = "#825E4A";

    } 

});


// Quote Page
const displayQuote = (quoteTheme) => {
    const randomIdx = Math.floor(Math.random() * quoteTheme.length);
    quote.innerText = quoteTheme[randomIdx].text;
    author.innerText = `– ${quoteTheme[randomIdx].author}`;

    quotePage.classList.remove("hide");
    mainPage.classList.add("hide");
}



// Main Page
const generateQuote = () => {

    if (!quoteTheme) {  // quoteTheme is empty (false)
        return;
    }

    displayQuote(quoteTheme);
};


// New Quote
const newQuote = () => {
    quote.innerText = "Quote";
    quoteTheme = "";
    moodPicked = "";
    selectOption.value = "";
    quotePage.classList.add("hide");
    mainPage.classList.remove("hide");
}



// Buttons
generateBtn.addEventListener("click", generateQuote);
newQuoteBtn.addEventListener("click", newQuote);



// Notes **********

// displayQuote(quoteTheme);
        // console.log("happy");
        // console.log(happyQuote[randomIdx]);
        // quote.innerText = "Happy";

// quote.innerText = quoteTheme[0];
