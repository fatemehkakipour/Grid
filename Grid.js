// Example dynamic data for rows and columns
const columns = ["ID", "Name", "Age", "Country"];
const data = [
    { ID: 1, Name: "John Doe", Age: 25, Country: "USA" },
    { ID: 2, Name: "Jane Smith", Age: 30, Country: "Canada" },
    { ID: 3, Name: "Sam Brown", Age: 22, Country: "UK" },
    { ID: 4, Name: "Emily White", Age: 28, Country: "Australia" }
];

// Function to generate the table dynamically
function generateTable() {
    const tableHead = document.getElementById('tableHead');
    const tableBody = document.getElementById('tableBody');

    // Clear the existing table
    tableHead.innerHTML = "";
    tableBody.innerHTML = "";

    // Create table headers dynamically
    const headerRow = document.createElement('tr');
    columns.forEach((col, index) => {
        const th = document.createElement('th');
        th.innerHTML = `${col} &#x25B2;&#x25BC;`;
        th.onclick = () => sortTable(index);
        headerRow.appendChild(th);
    });
    tableHead.appendChild(headerRow);

    // Create table rows dynamically
    data.forEach((row) => {
        const tr = document.createElement('tr');
        columns.forEach(col => {
            const td = document.createElement('td');
            td.textContent = row[col];
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

// Sort table function (similar to the previous version)
function sortTable(columnIndex) {
    let rows, switching, i, x, y, shouldSwitch, direction, switchcount = 0;
    const table = document.getElementById("dataGrid");
    switching = true;
    direction = "asc";

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnIndex];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex];

            if (direction === "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (direction === "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount === 0 && direction === "asc") {
                direction = "desc";
                switching = true;
            }
        }
    }
}

// Filter table function (same as previous)
function filterTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("dataGrid");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let shouldShow = false;
        const cells = rows[i].getElementsByTagName("td");

        for (let j = 0; j < cells.length; j++) {
            const cell = cells[j];
            if (cell) {
                const textValue = cell.textContent || cell.innerText;
                if (textValue.toLowerCase().indexOf(filter) > -1) {
                    shouldShow = true;
                    break;
                }
            }
        }

        rows[i].style.display = shouldShow ? "" : "none";
    }
}

// Initial load of table
generateTable();
    const toggleButton = document.getElementById('theme-toggle');

    toggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
    });
