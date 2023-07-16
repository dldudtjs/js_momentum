const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
  "16.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// 이미지 중 하나 선택

const bgImage = document.createElement("img");
// HTML element 만듦

bgImage.src = `img/${chosenImage}`;

// 생성한 bgImage를 body에 append 시킴(body의 마지막 줄에 들어감)
// (append 대신 prepend를 사용할 수도 있음 -> 맨 윗 줄에 들어감)
document.body.appendChild(bgImage);

// 밑에서 3줄은 HTML에서의 <img src=""/> 과 같음
