////////////////////////////////
/////////////Costanti///////////
////////////////////////////////

const imgWrapper = document.querySelector('.my-carousel-images');
const left = document.querySelector('.my-previous');
const right = document.querySelector('.my-next');
const listImg = document.querySelector('.my-thumbnails');
let counterImg = 0;


const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

images.forEach(img =>{
    imgWrapper.innerHTML +=
    `
    <div class="my-carousel-item">
        <img class="img-fluid" src="${img.url}" alt="">
        <div class="item-description px-3">
            <h2>${img.title}</h2>
            <p>${img.description}</p>
        </div>
    </div>
    `;

    listImg.innerHTML += 

    `
    <div class="my-thumbnail">
         <img class="img-fluid" src="${img.url}" alt="">
    </div>
    `
})

const allImg = document.querySelectorAll('.my-carousel-item');
allImg[0].classList.add('active');

const allThb = document.querySelectorAll('.my-thumbnail');
allThb[0].classList.add('active');

right.addEventListener('click', function(){
    allImg[counterImg].classList.remove('active');
    allThb[counterImg].classList.remove('active');
    counterImg++;
    if (counterImg >= allImg.length) {
        counterImg = 0;  
    };
    allImg[counterImg].classList.add('active');
    allThb[counterImg].classList.add('active');

}
)

left.addEventListener('click', function(){
    allImg[counterImg].classList.remove('active');
    allThb[counterImg].classList.remove('active');
    counterImg--;
    if (counterImg < 0) {
        counterImg = allImg.length - 1;
    }
    allImg[counterImg].classList.add('active');
    allThb[counterImg].classList.add('active');
}
)

///////////////
///Funzioni////
///////////////
