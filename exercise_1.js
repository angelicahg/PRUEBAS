var edad = parseInt(prompt("Ingrese su edad"))

if (Number(edad) === edad) {
  if (edad >= 18) {
    document.write('puedes conducir')
  } else {
    document.write('no puede conducir')
  }
} else {
  alert('Ingrese un número válido')
}

