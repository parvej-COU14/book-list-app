const title=document.getElementById("title");
const author=document.getElementById("author");
const year=document.getElementById("year");
const btn=document.querySelector('.btn');
const bookList=document.getElementById("bookList");

 btn.addEventListener("click",function(e){
     e.preventDefault();
     if(title.value==''&&author.value==''&&year.value==''){
         alert('Please fill up the form')
     }
     else{
         const newRow=document.createElement('tr');
        //  creating coloum
         const newTitle=document.createElement('th');
       newTitle.innerHTML=title.value;
        newRow.appendChild(newTitle)

        const newAuthor=document.createElement('th');
       newAuthor.innerHTML=author.value;
        newRow.appendChild(newAuthor)

        const newYear=document.createElement('th');
       newYear.innerHTML=year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow)

     }
 })