
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const table = document.querySelector('table');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const callType = document.querySelector('input[name="one"]:checked').nextSibling.textContent();
        const firstName = document.getElementById('fname').value;

        const lastName = document.getElementById('lname').value.trim();

        const client = document.querySelector('select[name="sd"]').value.trim();

        const date = document.querySelector('input[type="date"]').value.trim();

        const newRow = table.insertRow(-1); 
        const typeCell = newRow.insertCell(0);
        const nameCell = newRow.insertCell(1);
        const clientCell = newRow.insertCell(2);
        const createdDateCell = newRow.insertCell(3);
        const actionCell = newRow.insertCell(4);

        typeCell.textContent = callType;
        nameCell.textContent = `${firstName} ${lastName}`;
        clientCell.textContent = client || other;
        createdDateCell.textContent = date;
        actionCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
        
        ///form.reset();
    });
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
styles.cssstyles.css