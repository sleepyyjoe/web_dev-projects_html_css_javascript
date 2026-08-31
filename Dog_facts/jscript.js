let url = 'https://dogapi.dog/api/facts';
let btn = document.querySelector('.click_me');
btn.addEventListener("click",()=>{
dogfact();
})
let dogfact = async ()=>{
  let p = await fetch(url);
  let data = await p.json();
  document.querySelector(".fact").value = await data.facts[0];
}
