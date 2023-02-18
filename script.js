let records = [];
let ID = 1;

let table = document.getElementById("myTable");

function addRecord() {
    
    bookname = document.getElementById("bookName").value;
    issuedto = document.getElementById("issuedTo").value;

    
    let date = new Date();
    let current_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    let current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let currentStatus = "Not Returned";


    let newrecord = { id: ID, book_name: bookname, issued_to: issuedto, issued_time: current_date + " at " + current_time, status: currentStatus };

    records.push(newrecord);

    
    let row = table.insertRow(ID);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);


    
    cell1.innerHTML = ID;
    cell2.innerHTML = newrecord.book_name;
    cell3.innerHTML = newrecord.issued_to;
    cell4.innerHTML = newrecord.issued_time;
    cell5.style.color = "red";
    cell5.innerHTML = newrecord.status;

    let newButton = document.createElement("button");
    newButton.className = "btn1";
    newButton.innerText = "click";

    
    newButton.onclick = function () {
        cell5.style.color = "green";
        cell5.innerHTML = "Returned";
        newrecord.status = "Returned";
    };
    cell5.appendChild(newButton);



    
    document.getElementById("bookName").value = "";
    document.getElementById("issuedTo").value = "";

    
    ID++;



}