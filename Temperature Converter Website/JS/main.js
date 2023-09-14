
const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

// Window Loading reset
window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
})


convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    // Add Loading Feature
    convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>Converting...</span>";
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>";
    }, 1000);

})

function convertToCelsius() {
    let inputValue = degree.value;

    setTimeout(() => {
        if(tempType.value === "fahrenheit") {
            const fahrenheitToCelsius = (inputValue -32) * (5/9);
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;c`;
        }
        else if(tempType.value === "kelvin") {
            const kelvinToCelsius = (inputValue - 273.15);
            celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;c`;
        }
        else if(tempType.value === "rankine") {
            const rankineToCelsius = (inputValue) * (9/5) + 491.67;
            celsiusField.innerHTML = `${rankineToCelsius.toFixed(3)} &deg;c`;
        }
    }, 1200);
}


// Add Reset Feature
const reset = () => {
    document.querySelector("#degree").value = " ";
    celsiusField.innerHTML = "";
}