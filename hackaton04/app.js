const objetoEjemplo = {
  likes: 2,
  dislikes: 3,
  followers: 10,
};

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

// ====== Lógica del Ejercicio 01 ======
const btnEj1 = document.getElementById("btn_ej1");
const inputEj11 = document.getElementById("input_ej1_1");
const inputEj12 = document.getElementById("input_ej1_2");

btnEj1.addEventListener("click", () => {
  const valor1 = Number(inputEj11.value);
  const valor2 = Number(inputEj11.value);

  const idResult = btnEj1.dataset.resultado;
  // Validar que sea número
  if (
    isNaN(valor2) ||
    inputEj12.value.trim() === "" ||
    isNaN(valor1) ||
    inputEj11.value.trim() === ""
  ) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  let result = suma(valor1, valor2);

  const str = `La suma de los dos numeros es: ${result}`;
  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 02 ======
const btnEj2 = document.getElementById("btn_ej2");
const inputEj22 = document.getElementById("input_ej2_1");
const inputEj21 = document.getElementById("input_ej2_2");

btnEj2.addEventListener("click", () => {
  const valor1 = Number(inputEj22.value);
  const valor2 = Number(inputEj21.value);

  const idResult = btnEj2.dataset.resultado;
  // Validar que sea número
  if (
    isNaN(valor2) ||
    inputEj21.value.trim() === "" ||
    isNaN(valor1) ||
    inputEj22.value.trim() === ""
  ) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  const result = potencia(valor1, valor2);

  const str = `numero: ${valor1}, potencia: ${valor2}, resultado: ${result}`;
  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 03 ======
const btnEj3 = document.getElementById("btn_ej3");
const inputEj3 = document.getElementById("input_ej3");

btnEj3.addEventListener("click", () => {
  // const valor1 = Number(inputEj22.value);

  const idResult = btnEj3.dataset.resultado;
  // Validar que sea número
  if (inputEj3.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  // "1,5,9"
  // [1,5,9]

  const arrayDeNumeros = inputEj3.value.split(",").map(Number);
  const result = arrayDeNumeros.map((item) => {
    return (item = potencia(item, 3));
  });
  // [1,125,729];
  const total = result.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0,
  );

  const str = `la suma de los cubos de los numeros: ${inputEj3.value} es: ${total}`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 05 ======
const btnEj4 = document.getElementById("btn_ej4");
const inputEj41 = document.getElementById("input_ej4_1");
const inputEj42 = document.getElementById("input_ej4_2");

btnEj4.addEventListener("click", () => {
  const valor1 = Number(inputEj41.value);
  const valor2 = Number(inputEj42.value);

  const idResult = btnEj4.dataset.resultado;
  // Validar que sea número
  if (
    isNaN(valor2) ||
    inputEj41.value.trim() === "" ||
    isNaN(valor1) ||
    inputEj42.value.trim() === ""
  ) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  const result = triArea(valor1, valor2);

  const str = `El area del triangulo es de: ${result}`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 06 ======
const btnEj6 = document.getElementById("btn_ej6");

btnEj6.addEventListener("click", () => {
  const idResult = btnEj6.dataset.resultado;

  const str = `6.2: Indefinida`;
  showResult(idResult, str, false);
  return;
});

// ====== Lógica del Ejercicio 04 ======
const btnEj5 = document.getElementById("btn_ej5");
const inputEj51Num = document.getElementById("input_ej51_num");
const inputEj5Op = document.getElementById("input_ej5_op");
const inputEj52Num = document.getElementById("input_ej52_num");

btnEj5.addEventListener("click", () => {
  const valor1 = Number(inputEj51Num.value);
  const valor2 = Number(inputEj52Num.value);

  const idResult = btnEj5.dataset.resultado;
  // Validar que sea número
  if (
    isNaN(valor2) ||
    inputEj51Num.value.trim() === "" ||
    isNaN(valor1) ||
    inputEj52Num.value.trim() === "" ||
    inputEj5Op.value.trim() === ""
  ) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  const result = calculadora(valor1, valor2, inputEj5Op.value);

  const str = `El resultado de: ${valor1} ${inputEj5Op.value} ${valor2} = ${result}`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 8 ======
const btnEj8 = document.getElementById("btn_ej8");

btnEj8.addEventListener("click", () => {
  // const valor = Number(inputEj14.value);

  const idResult = btnEj8.dataset.resultado;

  const result = findLargestNums(arraDeArrays);

  const str = `Result: [${result}]`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 10 - 9 ======
const btnEj10 = document.getElementById("btn_ej10");
const inputEj10_1 = document.getElementById("input_ej10_1");
const inputEj10_2 = document.getElementById("input_ej10_2");

btnEj10.addEventListener("click", () => {
  // const valor = Number(inputEj14.value);

  if (inputEj10_1.value.trim() === "" || inputEj10_2.value.trim() === "") {
    showResult(idResult, "⚠️ No es un carater válido", true);
    return;
  }

  const idResult = btnEj10.dataset.resultado;

  const result = charIndex(inputEj10_1.value, inputEj10_2.value);

  const str = `Result: [${inputEj10_1.value}, ${inputEj10_2.value}] = [${result}]`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 11 ======
const btnEj11 = document.getElementById("btn_ej11");
// const inputEj14 = document.getElementById("input_ej14");

btnEj11.addEventListener("click", () => {
  // const valor = Number(inputEj14.value);

  const idResult = btnEj11.dataset.resultado;

  const result = getBudgets(ListaDeUsuarios);

  const str = `total: ${result}`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 12 ======
const btnEj12 = document.getElementById("btn_ej12");
// const inputEj14 = document.getElementById("input_ej14");

btnEj12.addEventListener("click", () => {
  // const valor = Number(inputEj14.value);

  const idResult = btnEj12.dataset.resultado;

  const result = getStudentNames(listaDeNombres);

  const str = `Result: [${result}]`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 13 ======
const btnEj13 = document.getElementById("btn_ej13");
// const inputEj14 = document.getElementById("input_ej14");

btnEj13.addEventListener("click", () => {
  // const valor = Number(inputEj14.value);

  const idResult = btnEj13.dataset.resultado;
  // Validar que sea número
  // if (isNaN(valor) || inputEj14.value.trim() === "") {
  //   showResult(idResult, "⚠️ No es un número válido.", true);
  //   return;
  // }

  const result = objectToArray(objetoEjemplo);

  console.log(result);

  const str = `Result: [${result}]`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 14 ======
const btnEj14 = document.getElementById("btn_ej14");
const inputEj14 = document.getElementById("input_ej14");

btnEj14.addEventListener("click", () => {
  const valor = Number(inputEj14.value);

  const idResult = btnEj14.dataset.resultado;
  // Validar que sea número
  if (isNaN(valor) || inputEj14.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido.", true);
    return;
  }

  const result = squaresSum(valor);

  const str = `Resultado: ${result}`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 15 ======
const btnEj15 = document.getElementById("btn_ej15");
const inputEj15 = document.getElementById("input_ej15");

btnEj15.addEventListener("click", () => {
  // const valor = Number(inputEj15.value);

  const idResult = btnEj15.dataset.resultado;
  // Validar que sea número
  if (inputEj15.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido.", true);
    return;
  }

  const arrayNumber = inputEj15.value.split(",").map(Number);

  const result = multiplyByLength(arrayNumber);

  const str = `Resultado: [${result}]`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 16 ======
const btnEj16 = document.getElementById("btn_ej16");
const inputEj16 = document.getElementById("input_ej16");

btnEj16.addEventListener("click", () => {
  const valor = Number(inputEj16.value);

  console.log(valor);

  const idResult = btnEj16.dataset.resultado;
  // Validar que sea número
  if (isNaN(valor) || inputEj16.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido.", true);
    return;
  }

  const result = countdown(valor);

  const str = `Resultado: [${result}]`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 17 ======
const btnEj17 = document.getElementById("btn_ej17");
const inputEj17 = document.getElementById("input_ej17");

btnEj17.addEventListener("click", () => {
  // const valor = Number(inputEj22.value);
  // const valor2 = Number(inputEj18.value);

  const idResult = btnEj17.dataset.resultado;
  // Validar que sea número
  if (inputEj17.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido.", true);
    return;
  }
  // 1, 2, 3, "x", "y", 10
  // console.log(filterList([1, 2, 3, "x", "y", 10]));
  const arrayUser = inputEj17.value.split(",").map((item) => {
    const num = Number(item);
    return Number.isNaN(num) ? item : num;
  });

  const result = diffMaxMin(arrayUser);

  const str = `Result: ${result}`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 18 ======
const btnEj18 = document.getElementById("btn_ej18");
const inputEj18 = document.getElementById("input_ej18");

btnEj18.addEventListener("click", () => {
  // const valor = Number(inputEj22.value);
  // const valor2 = Number(inputEj18.value);

  const idResult = btnEj18.dataset.resultado;
  // Validar que sea número
  if (inputEj18.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido.", true);
    return;
  }
  // 1, 2, 3, "x", "y", 10
  // console.log(filterList([1, 2, 3, "x", "y", 10]));
  const arrayUser = inputEj18.value.split(",").map((item) => {
    const num = Number(item);
    return Number.isNaN(num) ? item : num;
  });

  const result = filterList(arrayUser);

  const str = `Result: [${result}]`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 19 ======
const btnEj19 = document.getElementById("btn_ej19");
const inputEj19_1 = document.getElementById("input_ej19_1");
const inputEj19_2 = document.getElementById("input_ej19_2");

btnEj19.addEventListener("click", () => {
  // const valor = Number(inputEj22.value);
  const valor2 = Number(inputEj19_2.value);

  const idResult = btnEj19.dataset.resultado;
  // Validar que sea número
  if (
    isNaN(valor2) ||
    inputEj19_1.value.trim() === "" ||
    inputEj19_2.value.trim() === ""
  ) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  console.log(inputEj19_1.value, valor2);
  const result = repeat(inputEj19_1.value, valor2);

  console.log(result);

  const str = `[${result}]`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 20 ======
const btnEj20 = document.getElementById("btn_ej20");
const inputEj20_1 = document.getElementById("input_ej20_1");
const inputEj20_2 = document.getElementById("input_ej20_2");

btnEj20.addEventListener("click", () => {
  // const valor = Number(inputEj22.value);
  // const valor2 = Number(inputEj42.value);

  const idResult = btnEj20.dataset.resultado;
  // Validar que sea número
  if (inputEj20_1.value.trim() === "" || inputEj20_2.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  // const palabra = inputEj20_1.valor1

  const result = inputEj20_1.value.vreplace(inputEj20_2.value);

  showResult(idResult, result, false);

  return;
});

// ====== Lógica del Ejercicio 21 ======
const btnEj21 = document.getElementById("btn_ej21");
const inputEj21_1 = document.getElementById("input_ej21_1");

btnEj21.addEventListener("click", () => {
  // const valor = Number(inputEj22.value);
  // const valor2 = Number(inputEj42.value);

  const idResult = btnEj21.dataset.resultado;
  // Validar que sea número
  if (inputEj21_1.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  const result = findNemo(inputEj21_1.value);

  // const str = result;

  showResult(idResult, result, false);

  return;
});

// ====== Lógica del Ejercicio 22 ======
const btnEj22 = document.getElementById("btn_ej22");
const inputEj22_1 = document.getElementById("input_ej22_1");

btnEj22.addEventListener("click", () => {
  // const valor = Number(inputEj22.value);
  // const valor2 = Number(inputEj42.value);

  const idResult = btnEj22.dataset.resultado;
  // Validar que sea número
  if (inputEj22_1.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  const result = capLast(inputEj22_1.value);

  const str = `texto: ${inputEj22_1.value} Ultima Letra capitalizada: ${result}`;

  showResult(idResult, str, false);

  return;
});

//* FUNCTIONS
function suma(numero1, numero2) {
  return numero1 + numero2;
}

function potencia(numero, potencia) {
  const result = Math.pow(numero, potencia);
  return result;
}

const triArea = (base, altura) => (base * altura) / 2;

const calculadora = (num1, num2, op) => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;

    case "*":
    case "x":
    case "X":
      return num1 * num2;

    case "/":
      return num2 === 0 ? "No se puede dividir entre 0" : num1 / num2;
    default:
      return "Operacion Invalida";
  }
};

const capLast = (texto) =>
  texto
    .split(" ")
    .map((palabra) => {
      const inicio = palabra.slice(0, -1);
      const ultimaPalabra = palabra.slice(-1).toUpperCase();
      return inicio + ultimaPalabra;
    })
    .join(" ");

// console.log(capLast("esta es una oracion"));
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
const findNemo = (texto) => {
  const palabra = texto.split(" ");
  const position = palabra.indexOf("Nemo") + 1;
  return `I found Nemo at ${position}`;
};

String.prototype.vreplace = function (vocal) {
  return this.replace(/[aeiouAEIOU]/g, vocal);
};

const repeat = (numero, veces) => {
  return Array(veces).fill(numero);
};

const filterList = (array) => array.filter((item) => typeof item === "number");

const diffMaxMin = (array) => Math.max(...array) - Math.min(...array);

const countdown = (n) => {
  const result = [];

  for (let i = n; i >= 0; i--) {
    result.push(i);
  }

  return result;
};

const multiplyByLength = (arr) => arr.map((item) => item * arr.length);

const squaresSum = (numero) => {
  let suma = 0;

  for (let i = 1; i <= numero; i++) {
    suma += i ** 2;
  }

  return suma;
};

const objectToArray = (obj) => Object.entries(obj);

const listaDeNombres = [{ name: "Steve" }, { name: "Mike" }, { name: "John" }];

const getStudentNames = (array) => {
  return array.map((item) => item.name);
};

const ListaDeUsuarios = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

const getBudgets = (ListaDeUsuarios) => {
  return ListaDeUsuarios.reduce((total, persona) => total + persona.budget, 0);
};

// charIndex("hello", "l") ➞ [2, 3]
// // The first "l" has index 2, the last "l" has index 3.

// // The first "c" has index 0, the last "c" has index 8.

const charIndex = (palabra, caracter) => [
  palabra.indexOf(caracter),
  palabra.lastIndexOf(caracter),
];
const arraDeArrays = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];

// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

const findLargestNums = (array) => {
  return array.map((subArray) => Math.max(...subArray));
} 

// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))