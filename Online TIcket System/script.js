document.getElementById("ticketForm").addEventListener("submit", function (event) {

    event.preventDefault();

    // Get Values
    let name = document.getElementById("name").value.trim();
    let age = parseInt(document.getElementById("age").value);
    let departure = document.getElementById("departure").value.trim();
    let arrival = document.getElementById("arrival").value.trim();
    let profession = document.getElementById("profession").value;

    // Validation
    if (name === "" || departure === "" || arrival === "") {
        alert("Please fill all fields.");
        return;
    }

    if (isNaN(age) || age < 0 || age > 120) {
        alert("Please enter a valid age.");
        return;
    }

    if (departure.toLowerCase() === arrival.toLowerCase()) {
        alert("Departure and Arrival cannot be the same.");
        return;
    }

    // Price Calculation
    let price;

    if (age < 5 || age > 65) {
        price = 0;
    }
    else {
        price = 10000;

        if (profession === "Student") {
            price = price * 0.5;
        }
    }

    // Print Ticket
    document.getElementById("result").innerHTML = `
        <div class="ticket">
            <h3>ONLINE TICKET</h3>
            <hr>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Departure:</strong> ${departure}</p>
            <p><strong>Arrival:</strong> ${arrival}</p>
            <p><strong>Profession:</strong> ${profession}</p>

            <hr>

            <h2>Ticket Price: Rs. ${price.toLocaleString()}</h2>
        </div>
    `;

    // Clear Form
    document.getElementById("ticketForm").reset();

});