function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let result;

  if (isNaN(temperature)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }  

  if (fromUnit === toUnit) {
    result = temperature;
  } else if (fromUnit === "celsius") {
    result = toUnit === "fahrenheit" ? (temperature * 9 / 5) + 32 : temperature + 273.15;
  } else if (fromUnit === "fahrenheit") {
    result = toUnit === "celsius" ? (temperature - 32) * 5 / 9 : (temperature - 32) * 5 / 9 + 273.15;
  } else if (fromUnit === "kelvin") {
    result = toUnit === "celsius" ? temperature - 273.15 : (temperature - 273.15) * 9 / 5 + 32;
  }

  document.getElementById("result").innerText = `Result: ${result.toFixed(2)}° ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;

  const modal = document.getElementById("animationModal");
  const modalResult = document.getElementById("modalResult");
  const modalIcon = document.getElementById("modalIcon");
  modal.className = "modal";
  modal.style.display = "flex";

  let celsiusResult = result;
  if (toUnit === "fahrenheit") celsiusResult = (result - 32) * 5 / 9;
  else if (toUnit === "kelvin") celsiusResult = result - 273.15;

  if (celsiusResult <= 10) {
    modal.classList.add("cold");
    modalIcon.innerHTML = "❄️";
    modalResult.innerText = `Cold: ${result.toFixed(2)}° ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
  } else if (celsiusResult > 10 && celsiusResult <= 25) {
    modal.classList.add("warm");
    modalIcon.innerHTML = "🌤️";
    modalResult.innerText = `Warm: ${result.toFixed(2)}° ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
  } else {
    modal.classList.add("hot");
    modalIcon.innerHTML = "🔥";
    modalResult.innerText = `Hot: ${result.toFixed(2)}° ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
  }
}


// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById("animationModal");
  modal.style.display = "none";
  // Mostrar el resultado
  document.getElementById("result").innerText = `Result:  ${result.toFixed(2)}° ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}



function refreshFields() {
  // Restablecer los campos de entrada y el resultado
  document.getElementById("temperature").value = "";
  document.getElementById("fromUnit").selectedIndex = 0; // Seleccionar el primer elemento
  document.getElementById("toUnit").selectedIndex = 0; // Seleccionar el primer elemento
  document.getElementById("result").innerText = ""; // Limpiar el resultado
}