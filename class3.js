class CrearPersona {
    constructor(Nombre, Fecha, DNI, Genero, Peso, Altura) {
      this.Nombre = Nombre;
      this.Fecha = Fecha;
      this.DNI = DNI;
      this.Genero = this.comprobar(Genero);
      this.Peso = Peso;
      this.Altura = Altura;
    }
  
    CalIMC() {
      const IMC = this.Peso / (this.Altura ** 2);
  
      if (IMC < 20) {
        return -1;
      } else if (IMC >= 20 && IMC <= 25) {
        return 0;
      } else {
        return 1;
      }
    }
  
    MayorEdad() {
      const FechaAct = new Date();
      const fechaNacimiento = new Date(this.Fecha);
      const Edad = FechaAct.getFullYear() - fechaNacimiento.getFullYear();
  
      return edad >= 18;
    }
  
    CPGenero(Genero) {
      const Validos = ['H', 'M', 'N'];
  
      if (Validos.includes(Genero)) {
        return Genero;
      } else {
        return 'H';
      }
    }
  }
  
  const formulario = document.getElementById('formulario');
  
  formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const Nombre = document.getElementById('Nombre').value;
    const Fecha = document.getElementById('Fecha').value;
    const DNI = document.getElementById('DNI').value;
    const Genero = document.getElementById('Genero').value;
    const Peso = parseFloat(document.getElementById('Peso').value);
    const Altura = parseFloat(document.getElementById('Altura').value);
  
    const Persona = new CrearPersona(Nombre, Fecha, DNI, Genero, Peso, Altura);
  
    const IMC = Persona.CalIMC();
  
    const esMayor = Persona.MayorEdad();
  
    console.log('Nombre:', Persona.Nombre);
    console.log('DNI:', Persona.DNI);
    console.log('Fecha de Nacimiento:', Persona.Fecha);
    console.log('Género:', Persona.Genero);
    console.log('Peso:', Persona.Peso);
    console.log('Altura:', Persona.Altura);
    console.log('IMC:', IMC);
    console.log('Es mayor de edad:', MayorEdad);
  });
