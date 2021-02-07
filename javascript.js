const batton=document.getElementById('submit-btn');
const parent=document.getElementById('show-text');
const details=document.getElementById('show-extratext');
batton.addEventListener('click',function(){
    const input=document.getElementById('search-input').value;
    datafetch(input)
})

const datafetch = inputdata=>{
 //   console.log(inputdata)
    
  //  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputdata}`)
//fetch('https://www.themealdb.com/api/json/v1/1/random.php')

   .then(res=>res.json())
   .then(data=>{
          //console.log(data)
      // console.log(inputdata)
       const h=document.createElement('h1')
       h.className="heading"
       info=`
       <h3>${inputdata}</h3>

       `
     //  h.innerText=inputdata;
       h.innerHTML=info;
       parent.appendChild(h);
       display(data.meals);


})
}

const display= data=>{
    // console.log("outside")
    const div=document.createElement('div');
    for(let i=0;i<data.length;i++){
        const h1=(data[i].strIngredient1)
        const h2=(data[i].strIngredient2)
        const h3=(data[i].strIngredient3)
        const h4=(data[i].strIngredient4)
        const h5=(data[i].strIngredient5)
        const h6=(data[i].strIngredient6)

    infoname=`
         <h1>INGREDIENTS ARE</h1>
         <p>${h1}</p>
         <p>${h2}</p>
         <p>${h3}</p>
         <p>${h4}</p>
         <p>${h5}</p>
         <p>${h6}</p>
    `
    div.innerHTML=infoname;

       parent.appendChild(div)
       
        
    }


}

