const users = [
  {
    name: "Joeylene Rivera",
    role: "Web Developer",
    description: "A kiddo who uses Bootstrap and Laravel in web development. Currently playing around with design via Figma.",
    email: "joeylenerivera@gmail.com",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Ethan Carter",
    role: "UI/UX Designer",
    description: "Passionate about creating clean interfaces and smooth user experiences using Figma and Adobe XD.",
    email: "ethancarter@gmail.com",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Sophia Adams",
    role: "Frontend Developer",
    description: "Loves building responsive websites using HTML, CSS, JavaScript and React.",
    email: "sophiaadams@gmail.com",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "Liam Walker",
    role: "Backend Developer",
    description: "Works with Node.js, Express and MongoDB to create scalable backend systems.",
    email: "liamwalker@gmail.com",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    name: "Olivia Brown",
    role: "Graphic Designer",
    description: "Designs modern branding, posters and social media creatives using Photoshop and Illustrator.",
    email: "oliviabrown@gmail.com",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    name: "Noah Wilson",
    role: "Full Stack Developer",
    description: "Builds complete web apps using MERN stack with a focus on performance.",
    email: "noahwilson@gmail.com",
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    name: "Emma Taylor",
    role: "Mobile App Developer",
    description: "Creates Android and iOS apps using Flutter and React Native.",
    email: "emmataylor@gmail.com",
    image: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    name: "James Martin",
    role: "Data Analyst",
    description: "Uses Python, SQL and Power BI to analyze data and generate insights.",
    email: "jamesmartin@gmail.com",
    image: "https://randomuser.me/api/portraits/men/8.jpg"
  }
];
var name1 = document.querySelector('.name');
var role1 = document.querySelector('#role');
var des1 = document.querySelector('.descption');
var email1 =document.querySelector('.gmail');
var img1 = document.querySelector('#imgs')
var bdy = document.querySelector('body')
var sum =  0 ;



users.forEach(function (element,index) {  
  sum = sum + `
  <div class="card">
        <img id="imgs" src="${element.image}" alt="">
        <b>
            <h1 class="${element.name}">
                Joeylene Rivera
            </h1>
        </b>
        <h2 id="role">${element.role}</h2>
        <div class="descption">
            <p>${element.description}</p>
        </div>
        <div class="gmail">
            <p>${element.email}</p>
        </div>
        <div class="handles">
            <img src="Twitter Icon.svg" alt="">
            <img src="DEV.to Icon.svg" alt="">
            <img src="Dribbble Icon.svg" alt="">
            <img src="GitHub Icon.svg" alt="">
            <img src="LinkedIn Icon.svg" alt="">
            <img src="Instagram Icon.svg" alt="">
        </div>
        
    </div>` ;








});

bdy.innerHTML = sum;


bdy.addEventListener('click',function (A) {
  console.log(A.target);
  
})