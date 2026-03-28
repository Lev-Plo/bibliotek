// import { nanoid } from 'nanoid'

// const data = [
//   {
//     name: "Іван",
//     age: 25,
//     city: "Київ"
//   },
//   {
//     name: "Марія",
//     age: 30,
//     city: "Львів"
//   },
//   {
//     name: "Олег",
//     age: 22,
//     city: "Одеса"
//   }
// ];
// const result = data.map((item) => {
//     return {
//         ...item,
//         id: nanoid(5)
//     }
// }) 
// console.log(result);



//========бібліотека PNotify============



import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
defaultModules.set(PNotifyMobile, {});



const btnRef = document.querySelector(".btn")
const btn2El = document.querySelector(".btn")


btnRef.addEventListener("click", () => {
    notice({
        title: 'Haha, I popped up on your screen',
        text: 'Ahh man, but only for 2 seconds.',
        delay: "2000"
});
});

btn2El.addEventListener("click", () => {
    info({
        title: 'NOOOOOOOOOOOO!',
        text: 'I am going to dissapear.',
        delay: "1500"
});
});