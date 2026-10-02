// Get the input fields

let zipcode = document.getElementById("zipcode");
let city = document.getElementById("city");


// Run when the user enters a zipcode

zipcode.addEventListener("input", function () {

    let enteredZipcode = zipcode.value;


    // Check the zipcode using switch

    switch (enteredZipcode) {

        case "74200":
            city.value = "Karachi";
            break;

        case "44000":
            city.value = "Islamabad";
            break;

        case "54000":
            city.value = "Lahore";
            break;

        case "25000":
            city.value = "Peshawar";
            break;

        case "60000":
            city.value = "Multan";
            break;

        case "46000":
            city.value = "Rawalpindi";
            break;

        case "71000":
            city.value = "Hyderabad";
            break;

        case "52000":
            city.value = "Quetta";
            break;

        default:
            city.value = "Pakistan";
            break;
    }

});

