let count = 0;
document.getElementById('add-btn').addEventListener('click',function(){
    count++;
    let inputValue = document.getElementById('input-value').value ;

    if(inputValue==""){
        alert('please enter a value');
    }
    else{
        let mainContainer = document.getElementById('content-container');

        const tableContainer = document.createElement("tr");
        tableContainer.innerHTML =`<th>${count}</th>
        <td>${inputValue}</td>
        <td><button class='delete-btn btn btn-danger'>Delete</button>
        <button class='done-btn btn btn-success'>Done</button></td>`;

        mainContainer.appendChild(tableContainer);
        document.getElementById('input-value').value= '' ;

        const deleteButton = document.getElementsByClassName('delete-btn');
        const doneButton = document.getElementsByClassName('done-btn');
        //for delete btn
        for(let button of deleteButton){
            button.addEventListener('click', function(event){
                event.target.parentNode.parentNode.style.display = 'none';
            });
        }
        //for done btn
        for(let button of doneButton){
            button.addEventListener('click', function(event){
                event.target.parentNode.parentNode.style.textDecoration = 'line-through';
            })
        }



    }

});