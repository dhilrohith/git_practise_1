const myPromise = new Promise((res, rej)=>{
    setTimeout(()=>{
        res({
            name:"Aravind",
            age:22
        })
    }, 2000);
})

const resolvedPromise = async ()=>{
    try {
        const result = await myPromise;
        console.log("User:", result);
    } catch (err) {
        console.error(err);
    }
}

resolvedPromise();

