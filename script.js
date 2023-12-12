const inputBox= document.getElementById("input-box");
const list= document.getElementById("list");
function addTask()
{
    if (inputBox.value==='')
    {
        alert("Add task!");
    }
    else
    {
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        list.appendChild(li); 
        let btn1= document.createElement("button");
        let btn2= document.createElement("button");
        btn1.innerText="EDIT";
        btn2.innerText="DELETE";
        li.appendChild(btn1);
        li.appendChild(btn2); 

        btn1.style.border= "none";
        btn1.style.marginLeft= "3%";
        btn1.style.borderRadius= "8px";
        
        btn2.style.border= "none";
        btn2.style.marginLeft= "3%";
        btn2.style.borderRadius= "8px";

        btn1.addEventListener('click',
        function()
        {
           li.contentEditable=true;
        } 
        );
        
        btn2.addEventListener('click',
        function()
        {
           li.remove();
        }
        );
     }
    inputBox.value= "";
    saveData();
    
}
function saveData()
{
 localStorage.setItem("lists", list.innerHTML);
}




