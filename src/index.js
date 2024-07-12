document.addEventListener('DOMContentLoaded',function(){
  const fom =document.getElementById("create-task-form");
  const textArea=document.getElementById("new-task-description");
  const clear=document.getElementById('clearing');
  
  
  const cont=document.getElementById('tasks');
  fom.addEventListener('submit',function(e){
    e.preventDefault();
    const item=document.createElement("li");
    item.textContent=textArea.value
    
    cont.appendChild(item);
    
    textArea.value="";

    const btn=document.createElement('button');
    btn.innerText="x";
    btn.addEventListener('click',function(){
      item.remove();
    });
    item.appendChild(btn);

    
    ;
    clear.addEventListener('click',function(){
      cont.innerHTML='';
      

    });
    
      
    
    

    
  });
  
});


  
