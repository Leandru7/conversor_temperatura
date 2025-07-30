function converterParaF() {
    const celsius = parseFloat(document.getElementById("inputTemp").value);
    if (isNaN(celsius)) {
        document.getElementById("resultado").textContent = "Digite um número válido.";
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultado").textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

function converterParaC() {
    const fahrenheit = parseFloat(document.getElementById("inputTemp").value);
    if (isNaN(fahrenheit)) {
        document.getElementById("resultado").textContent = "Digite um número válido.";
        return;
    }
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("resultado").textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
}
