async function fetchPromise(){
try{
    const response =await fetch('https://rickandmortyapi.com/api/character');
if(!response.ok){
  throw new console.error((`HTTP error:${response.status} `));
}
const data = await response.json();

let data1=``;
data.results
.filter((filter) =>{
  if(filter.status ==="Alive")return filter;
})   
.map((data) => {
  if (data.episode.length > 25){
    data.property="main";
  }
  else{
    data.property="side";
  }
  data1 +=
  ` <div class="card">
    <h1 >${data.name}</h1>
    <img src=${data.image} alt="img">
    <p>${data.species}</p>
    <p >${data.status}</p>
    <p>${data.gender}</p>
  </div>`;
});
const section = document.querySelector(".cards");
section.innerHTML=data1;
} catch (error){
  console.error(`could not getfatas ${error}`);

}
}
fetchPromise();
