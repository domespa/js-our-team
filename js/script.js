const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  },
  {
    name: "Spampinato Domenico",
    role: "Porta borracce",
    email: "porta.borracce@gmail.com",
    img: "https://scontent.fcta2-2.fna.fbcdn.net/v/t39.30808-6/463059098_8987748644568907_7772676068432671181_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=WXzEO8Qlrb0Q7kNvgEBtOTt&_nc_zt=23&_nc_ht=scontent.fcta2-2.fna&_nc_gid=ATyUYQsDifoJP8OqsRl3YuW&oh=00_AYDsDdr2ZsTRrcu5GO0NXKzjfaTIgETmIluarfUpo099MA&oe=676220F0"
  }

];

// DOM ELMS

const cardsContainerElm = document.getElementById("cards-container");
const memberFormElm = document.getElementById("member-form");
const nameElm = document.getElementById("name");
const roleElm = document.getElementById("role");
const emailElm = document.getElementById("email");
const imageElm = document.getElementById("image");

// FORM
// DOM EVENTS

createCard();


memberFormElm.addEventListener("submit", function(event) {
  event.preventDefault();


  const name = nameElm.value;
  const role = roleElm.value; 
  const email = emailElm.value;
  const img = imageElm.value;

    teamMembers.push({
      name,
      role,
      email,
      img
    });


    createCard();

});