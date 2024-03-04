function calcularExperienciaNecessaria(nivelAtual) {
    if (nivelAtual <= 136) {
      if (nivelAtual === 1) {
        return 1000;
      } else if (nivelAtual === 2) {
        return 3000;
      } else {
        let experienciaAnterior = 1000;
        let experienciaAtual = 3000;
        let experienciaDoisNiveisAtras = 0;
        
        for (let i = 3; i <= nivelAtual; i++) {
          experienciaDoisNiveisAtras = experienciaAnterior;
          experienciaAnterior = experienciaAtual;
          experienciaAtual = experienciaAnterior + (experienciaAnterior - experienciaDoisNiveisAtras + 1000);
        }
        
        return experienciaAtual;
      }
    } else {
      const baseExperiencia = 25;
      const fatorDeCrescimento = 1.1;
      let experienciaTotal = baseExperiencia;
      
      for (let i = 2; i < nivelAtual; i++) {
        experienciaTotal *= fatorDeCrescimento;
      }
      
      return Math.floor(experienciaTotal);
    }
  }
  
  const nivelAtual =130;
  const experienciaNecessaria = calcularExperienciaNecessaria(nivelAtual);
  console.log(`Para atingir o nível ${nivelAtual+1}, você precisa de ${experienciaNecessaria} pontos de experiência.\n`);
  