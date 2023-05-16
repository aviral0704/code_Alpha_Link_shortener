let btn = document.getElementById("Shorten");
let newurl = document.getElementById("short");
let copybtn = document.getElementById("copy");


btn.addEventListener('click', short);

async function short(){
    let long1 = document.getElementById("long").value;
    let shorturl = document.getElementById("short");


   const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${long1}`);
   const data = await result.json();

   shorturl.value = data.result.short_link2;
   

   console.log(data.result.short_link2);

}

copybtn.onclick = ()=>{
    newurl.select();
 
 window.navigator.clipboard.writeText(newurl.value);
 
}