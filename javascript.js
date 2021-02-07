const parent=document.getElementById("show-text")
const anotherparent=document.getElementById("show-extratext")
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
    //anotherparent.innerHTML=null
   for(let i=0;i<newdata.length;i++){
     let c=document.createElement("div")
     info=`
       <h1>Food-Name: ${newdata[i].strMeal}</h1>
       <img onclick="showdetail('${i}')" src="${newdata[i].strMealThumb}"></img>
       `
     c.innerHTML=info;
     parent.appendChild(c)
 
   }



}

const showdetail= (i,j)=>{
    let k=parseInt(i);
     fetch(url)
    .then(res=> res.json())
    .then(data=> {
    updateui(data.meals,k)
     
 })
}
const updateui=(data,i)=>{
//    console.log( data[i].strIngredient1)
//    console.log( data[i].strIngredient2)
//    console.log( data[i].strIngredient3)
//    console.log( data[i].strIngredient4)
//    console.log(data[i].strArea)
 const ul=document.createElement("li")
  anotherparent.innerHTML=null;
   detailinfo=`
   <h3> Region : ${data[i].strArea}</h3>
   <p>Ingredient 1 : ${ data[i].strIngredient1}</p>
   <p>Ingredient 2 : ${ data[i].strIngredient2}</p>
   <p>Ingredient 3 : ${ data[i].strIngredient3}</p>
   <p>Ingredient 4 : ${ data[i].strIngredient4}</p>
   <p>Ingredient 5 : ${ data[i].strIngredient5}</p>
   <p> Food category : ${ data[i].strCategory}</p>
   `
  ul.innerHTML=detailinfo;
  anotherparent.appendChild(ul);
}


