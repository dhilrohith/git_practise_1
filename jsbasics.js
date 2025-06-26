// for(let i=0; i<=5; i++){
//     if( i===1){
//         continue;
//     }

//     console.log(i);
// }

// const a = function (){
//     console.log("HEllO!! I am anonymous function");
// }

// a();

// const car = {
//     brand: "volksvagen",
//     name: "Golf GTI",
//     owner: {
//         name: "Dhil Rohith",
//         designation: "Backend-Developer"
//     }
// }

// console.log(`${car.owner.name} is having ${car.name}`)

// let student = {
//   name: "Rohith",
//   age: 25,
//   city: "Chennai"
// };

// delete student.city

// console.log(student);

// const myPromise = new Promise((resolve, reject)=>{
//     const promise = false;

//     if(promise){
//         resolve("Promis resolved");
//     }else{
//         reject("Promise rejected");
//     }
// })

// myPromise
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((err)=>{
//         console.error(err);
//     });


// console.log(typeof myPromise);

// const myPromise = new Promise((resolve, reject)=>{
//     const promise = false;

//     if(promise){
//         resolve("Promise resolved");
//     }else{
//         reject("Promise rejected");
//     }
// })


// const resolve = async ()=>{
//     console.log("Promise is resolving");

//     try {
//         const result = await myPromise;
//         console.log(result);
//     } catch (error) {
//         console.error(error)
//     }

// }

// resolve();


// let cart = { item: "Shoes", price: 1500 };

// localStorage.setItem("cartData", JSON.stringify(cart));
// const cartItems = JSON.parse(localStorage.getItem("cartData"));

// console.log(cartItems);

// let a = null;

// try {
//     a.name;
// } catch (err) {
//     console.error(err);
// }

// function add(a, b){
//     if(a < 0 || b < 0){
//         throw new Error("Invalid Number");
//     }
//      return a+b;
// }

// try {
//     add(5, -1) 
// } catch (err) {
//     console.error("New Error:", err.message);
// }

// class AuthenticationError extends Error{
//     constructor(message){
//         super(message)
//         this.name = "Validation Error"
//     }
// }

// function checkAge(age){
//     if(age <= 17){
//         throw new AuthenticationError("User should atleast 18");
//     }

//     else console.log('You are allowed');
// }

// try {
//     checkAge(16);
// } catch (err) {
//     console.error(`${err.name}: ${err.message}`);
// }

// Range Error
// const arr = new Array(-1)

// Aggregate Error
// const all = Promise.any([
//     Promise.reject("Promise A Failed"),
//     Promise.reject("Promise B FAiled")
// ]);

// all.catch((err)=>console.error(err))

// class Car{
//     constructor(brand, name){
//         this.brand = brand,
//         this.name = name
//     }

//     about(){
//         console.log(`${this.name} is created by ${this.brand}`)
//     }
// }

// const car1 = new Car("volkswagen", "Golf GTI");

// car1.about();

class Bank{
    #pin;

    constructor(name, pin){
        this.name = name;
        this.#pin = pin;
    }

    unlockWallet(pin){
        if(pin !== this.#pin){
            console.log("You are not allowed");
        }
        else{
            console.log(`${this.name} your account is unlocked`);
        }
    }
}

const person =  new Bank("dhil", 2803);

person.unlockWallet(2803);