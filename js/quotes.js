const quotes = [
  {
    quote: "I never dreamed about success, I worked for it",
    author: " [Estee Lauder]",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: " [Paul Rand]",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: " [John D. Rockefeller]",
  },
  {
    quote:   "Only I can change me life, no one can do it for me.",
    author: " [Carol Burnett]",
  },
  {
    quote: "Life is unfair, get used to it.",
    author: " [Bill Gates]",
  },
  {
    quote: "Great minds have purposes, others have wishes.",
    author: " [Washington]",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen",
    author: " [Wayne Huizenga]",
  },
  {
    quote:
      "The only thing worse than starting something and falling.. is not starting something",
    author: " [SEth Godin]",
  },
  {
    quote:
      "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
    author: " [Jim Rohn]",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// array의 길이를 받아서 길이만큼 random을 돌림
// Math.floor -> Math.floor(1.9) = 1

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
