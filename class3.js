class CPersona {
    constructor(nombre, fechaNacimiento, dni, genero, peso, altura) {
      this.nombre = nombre;
      this.fechaNacimiento = fechaNacimiento;
      this.dni = dni;
      this.genero = this.comprobarGenero(genero);
      this.peso = peso;
      this.altura = altura;
    }
  
    calcularIMC() {
      const imc = this.peso / (this.altura ** 2);
  
      if (imc < 20) {
        return -1;
      } else if (imc >= 20 && imc <= 25) {
        return 0;
      } else {
        return 1;
      }
    }
  
    esMayorDeEdad() {
      const fechaActual = new Date();
      const fechaNacimiento = new Date(this.fechaNacimiento);
      const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  
      return edad >= 18;
    }
  
    comprobarGenero(genero) {
      const generosValidos = ['H', 'M', 'O'];
  
      if (generosValidos.includes(genero)) {
        return genero;
      } else {
        return 'H';
      }
    }
  }
  
  const formulario = document.getElementById('formularioPersona');
  
  formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const dni = document.getElementById('dni').value;
    const genero = document.getElementById('genero').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
  
    const persona = new CPersona(nombre, fechaNacimiento, dni, genero, peso, altura);
  
    const imc = persona.calcularIMC();
  
    const esMayorEdad = persona.esMayorDeEdad();
  
    console.log('Nombre:', persona.nombre);
    console.log('Fecha de Nacimiento:', persona.fechaNacimiento);
    console.log('DNI:', persona.dni);
    console.log('Género:', persona.genero);
    console.log('Peso:', persona.peso);
    console.log('Altura:', persona.altura);
    console.log('IMC:', imc);
    console.log('Es mayor de edad:', esMayorEdad);
  });
//los this. siempre me dan problemas, me olvido que se llama de esa forma.