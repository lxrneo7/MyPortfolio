import self from "../img/self.png"
import AutoPark from "../img/AutoPark.png"
import wordle from "../img/wordle.png"
import Anime from "../img/Anime.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export let singlePage = false;



export const info = {
    firstName: "",
    lastName: "abdurahim",
    initials: "js", 
    position: "a Frontend Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the KG'
        },
        {
            emoji: "💼",
            text: "front-end developer at the Ministry of Economy"
        },
        {
            emoji: "📧",
            text: "Darknes7@bk.ru"
        }
    ],
    socials: [
        
        {
            link: "https://www.instagram.com/abdurahimk1?igsh=cGpoNHYzMWNsbHJ0",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/lxrneo7",
            icon: "fa fa-github",
            label: 'github'
        },
        
        

    ],
    bio: "Hello! My name is Abdurahim. I’m a 19-year-old frontend developer",

    skills:
        {
            proficientWith: ['javascript', 'typscript',  'react', 'git', 'github', 'taiwind', 'RTK query',  'html5', 'css3', 'docker'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [ 
        {
            title: "Project 1",
            live: "https://autopark5.vercel.app/", 
            source: "https://github.com/lxrneo7/autopark5", 
            image: AutoPark
        },
        {
            title: "Project 2",
            live: "https://anime-bro-t1fb.vercel.app/",
            source: "https://github.com/lxrneo7/AnimeBro",
            image: Anime
        },
        {
            title: "Project 3",
            live: "https://motion-wordle.vercel.app/",
            source: "https://github.com/lxrneo7/motion-wordle",
            image: wordle
        },
        {
            title: "Project 4",
            live: "",
            source: "",
            image: mock4
        },
        {
            title: "Project 5",
            live: "",
            source: "",
            image: mock5
        }
    ]
}