const tableContainer = document.getElementById('table-container');
const addRowBtn = document.getElementById('add-row-btn');
const dataTable = document.getElementById('data-table');

function addRow(){
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>New Cell 1</td>
        <td>New Cell 2</td>
        <td><button class="delete-btn">Delete</button></td>
    `;
    dataTable.appendChild(newRow)
}