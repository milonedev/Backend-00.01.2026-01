// UTIL
const showResult = (id, text, isError) => {
  const element = document.getElementById(id);
  if (isError) {
    element.classList.remove("hidden", "border-accent/30", "text-accent");
    element.classList.add("border-red-500/30", "text-red-400");
  } else {
    element.classList.remove("hidden", "border-red-500/30", "text-red-400");
    element.classList.add("border-accent/30", "text-accent");
  }
  element.innerHTML = text;
};

const accordionBtn = document.getElementsByClassName("btn-accordion");

Array.from(accordionBtn).forEach((item) => {
  item.addEventListener("click", () => {
    const ejercicio = item.dataset.ejercicio;
    toggleAccordion(ejercicio);
  });
});

function toggleAccordion(id) {
  const content = document.getElementById(id);
  const arrow = document.getElementById("arrow-" + id);
  content.classList.toggle("open");
  arrow.classList.toggle("rotate");
}

// ====== Lógica del Ejercicio 1 ======
const btnEj1 = document.getElementById("btn_ej1");
const inputEj1 = document.getElementById("input_ej1");
const resultadoEj1 = document.getElementById("resultado_ej1");

btnEj1.addEventListener("click", () => {
  const valor = Number(inputEj1.value);

  // Validar que sea número
  if (isNaN(valor) || inputEj1.value.trim() === "") {
    resultadoEj1.textContent = "⚠️ No es un número válido";
    resultadoEj1.classList.remove("hidden", "border-accent/30", "text-accent");
    resultadoEj1.classList.add("border-red-500/30", "text-red-400");
    return;
  }

  // Verificar 3 dígitos
  resultadoEj1.classList.remove("hidden", "border-red-500/30", "text-red-400");
  resultadoEj1.classList.add("border-accent/30", "text-accent");

  if (valor >= 100 && valor <= 999) {
    resultadoEj1.textContent = `✅ ${valor} tiene 3 dígitos`;
  } else {
    resultadoEj1.textContent = `❌ ${valor} NO tiene 3 dígitos`;
  }
});

// Enter también ejecuta
inputEj1.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnEj1.click();
});

// ====== Lógica del Ejercicio 2 ======
const btnEj2 = document.getElementById("btn_ej2");
const inputEj2 = document.getElementById("input_ej2");
const resultadoEj2 = document.getElementById("resultado_ej2");

btnEj2.addEventListener("click", () => {
  const valor = Number(inputEj2.value);

  // Validar que sea número
  if (isNaN(valor) || inputEj2.value.trim() === "") {
    resultadoEj2.textContent = "⚠️ No es un número válido";
    resultadoEj2.classList.remove("hidden", "border-accent/30", "text-accent");
    resultadoEj2.classList.add("border-red-500/30", "text-red-400");
    return;
  }

  // Verificar 3 dígitos
  resultadoEj2.classList.remove("hidden", "border-red-500/30", "text-red-400");
  resultadoEj2.classList.add("border-accent/30", "text-accent");

  if (valor <= 0) {
    resultadoEj2.textContent = `Es un numero negativo`;
  } else {
    resultadoEj2.textContent = `Es un numero entero positivo`;
  }
});

// Enter también ejecuta
inputEj2.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnEj2.click();
});

// ====== Lógica del Ejercicio 3 ======
const btnEj3 = document.getElementById("btn_ej3");
const inputEj3 = document.getElementById("input_ej3");
const idResult = "resultado_ej3";

btnEj3.addEventListener("click", () => {
  const valor = Number(inputEj3.value);

  // Validar que sea número
  if (isNaN(valor) || inputEj3.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido", true);
    return;
  }

  const ultimo = Math.abs(valor) % 10;

  if (ultimo === 4) {
    showResult(idResult, "El numero termina en 4", false);
  } else {
    showResult(idResult, "El numero no termina en 4", true);
  }
});

// Enter también ejecuta
inputEj3.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnEj3.click();
});

// ====== Lógica del Ejercicio 4 ======
const btnEj4 = document.getElementById("btn_ej4");
const inputEj41 = document.getElementById("input_ej4_1");
const inputEj42 = document.getElementById("input_ej4_2");
const inputEj43 = document.getElementById("input_ej4_3");

btnEj4.addEventListener("click", () => {
  const valor1 = Number(inputEj41.value);
  const valor2 = Number(inputEj42.value);
  const valor3 = Number(inputEj43.value);

  const idResult = btnEj4.dataset.resultado;
  // Validar que sea número
  if ([valor1, valor2, valor3].some(isNaN)) {
    showResult(idResult, "⚠️ No es un número válido", true);
    return;
  }

  const sorted = [valor1, valor2, valor3].sort((x, y) => x - y);

  const str = sorted.join("");

  showResult(idResult, str, false);
  return;
});

// ====== Lógica del Ejercicio 5 ======
const btnEj5 = document.getElementById("btn_ej5");
const inputEj5 = document.getElementById("input_ej5");

btnEj5.addEventListener("click", () => {
  const valor = Number(inputEj5.value);
  const precio = 80;

  const idResult = btnEj5.dataset.resultado;
  // Validar que sea número
  if (isNaN(valor) || inputEj5.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido", true);
    return;
  }

  const total = valor * precio;
  let desc = 0;
  if (valor > 30) desc = 0.4;
  else if (valor > 20) desc = 0.2;
  else if (valor > 10) desc = 0.1;

  const montoDesc = total * desc;

  const final = total - montoDesc;

  const str = `total sin Descuento: ${total}, %desc: ${desc * 100} cantidad: ${valor}, monto Descuento: ${montoDesc}, total a pagar: ${final}`;

  showResult(idResult, str, false);
  return;
});

// ====== Lógica del Ejercicio 6 ======
const btnEj6 = document.getElementById("btn_ej6");
const inputEj6 = document.getElementById("input_ej6");

btnEj6.addEventListener("click", () => {
  const valor = Number(inputEj6.value);

  let sueldo = 0;

  const idResult = btnEj6.dataset.resultado;
  // Validar que sea número
  if (isNaN(valor) || inputEj6.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido", true);
    return;
  }

  if (valor <= 40) {
    sueldo = valor * 20;
    const str = `El sueldo generado es de: ${sueldo}`;
    showResult(idResult, str, false);
  } else {
    const extras = valor - 40;
    sueldo = 40 * 20 + extras * 25;
    const str = `El sueldo generado es de: ${sueldo} extra: ${extras}`;
    showResult(idResult, str, false);
  }
  return;
});


// ====== Lógica del Ejercicio 39 ======
const btnEj39 = document.getElementById("btn_ej39");
const inputEj39 = document.getElementById("input_ej39");

btnEj39.addEventListener("click", () => {
  const valor = Number(inputEj39.value);

  const idResult = btnEj39.dataset.resultado;
  // Validar que sea número
  if (isNaN(valor) || inputEj39.value.trim() === "" || valor < 1) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  let pi = 0;

  for(let i = 0; i < valor; i++) {
    pi += ((-1)**i) * (4/(2 * i + 1))
  }
  const str = `π ≈ ${pi}\nπ real: ${Math.PI}\nError: ${Math.abs(pi - Math.PI).toFixed(12)}\nIteraciones: ${valor.toLocaleString()}`

  showResult(idResult, str, false);
  return;
});


// ====== Lógica del Ejercicio 40 ======
const btnEj40 = document.getElementById("btn_ej40");
const inputEj40 = document.getElementById("input_ej40");

btnEj40.addEventListener("click", () => {
  const valor = Number(inputEj40.value);

  const idResult = btnEj40.dataset.resultado;
  // Validar que sea número
  if (isNaN(valor) || inputEj40.value.trim() === "" || valor < 1) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  let pi = 3;

  for (let i = 0; i < valor; i++) {
    let d = 2 + 2 * i;
    // console.log((4 / (d * (d + 1) * (d + 2))))
    pi += ((-1) ** i) * (4 / (d * (d + 1) * (d + 2)));
  }
  const str = `π ≈ ${pi}\nπ real: ${Math.PI}\nError: ${Math.abs(pi - Math.PI).toFixed(15)}\nIteraciones: ${valor.toLocaleString()}\n`;

  showResult(idResult, str, false);

  return;
});
