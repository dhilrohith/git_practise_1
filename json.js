const person = {
    name: "Arun",
    age: 23,
    food:{
        tiffin: "Dosa",
        lunch: "Biriyani",
        dinner: "Nan"
    },
    isAge: true,
    movies: ["Interstellar", "Immaika Nodigal", "Retro"],
    love: null 
}

const jsonObject = JSON.stringify(person);
console.log(jsonObject);

const person2 = '{"name": "Arun", "age": 23, "food":{"tiffin": "Dosa", "lunch": "Biriyani", "dinner": "Nan"}, "isAge": true, "movies": ["Interstellar", "Immaika Nodigal", "Retro"], "love": null}'
const jsObject = JSON.parse(person2);
console.log(jsObject);