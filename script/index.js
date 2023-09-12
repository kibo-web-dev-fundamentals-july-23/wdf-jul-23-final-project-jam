let core = document.querySelector(".core");
let contain = document.querySelector(".contain");

let coreItems = [
  {
    word: "Core Wordpress",
    hubs: `Hub IT allows your business and <br />technology computers to store,<br />analyze, and manipulate big data in<br />the digital world`,
  },
  {
    word: "React js",
    hubs: `Hub IT allows your business and <br />technology computers to store,<br />analyze, and manipulate big data in<br />the digital world`,
  },
  {
    word: "Core Wordpress",
    hubs: `Hub IT allows your business and <br />technology computers to store,<br />analyze, and manipulate big data in<br />the digital world`,
  },
];
let containItems = [
  {
    img: "/Asset/code on the screen of a laptop.png",
    alt: "code displaying on the screen of a laptop",
    title: "IT security",
    description:
      "Hub IT allows your business and technology computers to store,analyze, and manipulate big data in the digital world",
  },
  {
    img: "/Asset/Laptop on a table .png",
    alt: "Laptop on a table",
    title: "IT security",
    description:
      "Hub IT allows your business and technology computers to store,analyze, and manipulate big data in the digital world",
  },
  {
    img: "/Asset/Laptop on a table .png",
    alt: "Laptop on a table",
    title: "IT security",
    description:
      "Hub IT allows your business and technology computers to store,analyze, and manipulate big data in the digital world",
  },
];
coreItems.forEach((item, i) => {
  let innerHTML = core.innerHTML;
  core.innerHTML =
    innerHTML +
    `<div class="words">
    <div class="word">${item.word}</div>
    <p class="hubs">
    ${item.hubs}
    </p>
  </div>`;
});

containItems.forEach((item)=>{
    let innerHTML= contain.innerHTML;
    contain.innerHTML= innerHTML+ `<div class="container">
    <div class="image_container_2">
      <img
        src="${item.img}"
        alt="${item.alt}"
      />
    </div>
    <p class="sol">${item.title}</p>
    <p class="hubs2">
      ${item.description}
    </p>`
})