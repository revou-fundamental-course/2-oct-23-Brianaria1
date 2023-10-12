function cel()
{
    var tempfahrenheit = document.getElementById("fahrenheit").value;
    var tempcelcius = (tempfahrenheit - 32) * (5 / 9);
    document.getElementById("celcius").value = tempcelcius;

    document.getElementById("equation-text").textContent = `(${tempfahrenheit}°F - 32) * (5/9) = ${tempcelcius.toFixed(2)}°C`;
}

function fah()
{
    var tempcelcius = document.getElementById("celcius").value;
    var tempfahrenheit = (tempcelcius * (9 / 5)) + 32;
    document.getElementById("fahrenheit").value = tempfahrenheit;

    document.getElementById("equation-text").textContent = `(${tempcelcius}°C * (9/5)) + 32 = ${tempfahrenheit.toFixed(2)}°F`;
}

function reset() {
    document.getElementById("celcius").value = 0;
    document.getElementById("fahrenheit").value = 0;
}

function reverse() {
    var tempcelcius = parseFloat(document.getElementById("celcius").value);
    var tempfahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    document.getElementById("celcius").value = tempfahrenheit.toFixed(2);
    document.getElementById("fahrenheit").value = tempcelcius.toFixed(2);
}