// example with setTimeout

console.log("init");

setTimeout(() => {
    console.log("first executation");
}, 3000);

setTimeout(() => {
    console.log("second executation");
}, 0)

console.log("end");