const parent=document.getElementById("show-text")
const button=document.getElementById('submit-btn')
button.addEventListener('click',function(){
    const text=document.getElementById('search-input').value;
    fetchdata(text);
})

const fetchdata= data=>{
    if(data.length===1){
        url=`https://www.themealdb.com/api/json/v1/1/search.php?f=${data}`
    }
    

    else{
        url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`
    }
    fetch(url)
 .then(res=> res.json())
 .then(data=>{
    console.log(data);
    displaydata(data.meals)
}) 
}

const displaydata = newdata=>{
    parent.innerHTML=null;
   for(let i=0;i<newdata.length;i++){
     const c=document.createElement("div")
     info=`
       <h1>${newdata[i].strMeal}</h1>
       <img onclick="funct('${newdata}')" src="${newdata[i].strMealThumb}"></img>
       `
     c.innerHTML=info;
     parent.appendChild(c)
 
   }



}


function funct(data){
  for(let i=0;i<data.length;i++){
      console.log(data[i].strIngredient1)
  }
  }


