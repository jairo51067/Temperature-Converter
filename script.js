function convertTemperature() {
  // Obtener los valores de entrada
  const temperature = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let result;

  // Comprobar si la temperatura es un número
  if (isNaN(temperature)) {
      document.getElementById("result").innerText = "Please enter a valid number.";
      return;
  }

  // Convertir la temperatura a la unidad deseada
  if (fromUnit === toUnit) {
      result = temperature; // Si las unidades son las mismas, no se necesita conversión
  } else if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
          result = (temperature * 9/5) + 32;
      } else if (toUnit === "kelvin") {
          result = temperature + 273.15;
      }
  } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
          result = (temperature - 32) * 5/9;
      } else if (toUnit === "kelvin") {
          result = (temperature - 32) * 5/9 + 273.15;
      }
  } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
          result = temperature - 273.15;
      } else if (toUnit === "fahrenheit") {
          result = (temperature - 273.15) * 9/5 + 32;
      }
  }

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