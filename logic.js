document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.getElementById('table-container');
    const addRowBtn = document.getElementById('add-row-btn');
    const dataTable = document.getElementById('dynamic-table');
    const deleteRowBtn = document.getElementById('delete-row-btn');
    let latestRow = null;
    
        // Define addRow function
    function addRow(NAME, UID, Profile) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <th>${NAME}</th></th>
            <td>${UID}</td>
            <td>${Profile}</td>
        `;
        const tbody = dataTable.querySelector('tbody');
        tbody.appendChild(newRow);
        latestRow = newRow;
    }
    
    function promptForDetails(){
        const NAME = prompt('Enter name: ');
        const UID = prompt('Enter uid: ');
        const Profile = prompt('Enter profile: ');

        addRow(NAME, UID, Profile);
    }

    function deleteRow(){
        if(latestRow){
            latestRow.remove();
            latestRow = null;
        }else{
            console.warn('No rows to remove');
        }
    }
    addRowBtn.addEventListener('click', function(){
        promptForDetails();
    });

    deleteRowBtn.addEventListener('click', function(){
        deleteRow();
    });
    

    // Delete button event listener
    dataTable.addEventListener('click', function(event) {
        if(event.target.classList.contains('delete-row-btn')){
            event.target.closest('tr').remove();
        }
    });
});
