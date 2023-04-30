function pt(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(pt, 1000);