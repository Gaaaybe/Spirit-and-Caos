function calcularNivel(experiencia) {
    if (experiencia < 1000) {
        return 1;
    } else if (experiencia < 3000) {
        return 2;
    } else {
        let nivel = 3;
        let experienciaAnterior = 1000;
        let experienciaAtual = 3000;

        while (experienciaAtual < experiencia) {
            let novaExperiencia = experienciaAtual + (experienciaAtual - experienciaAnterior + 1000);
            experienciaAnterior = experienciaAtual;
            experienciaAtual = novaExperiencia;
            if (novaExperiencia<=experiencia){
                nivel++;
            }
        }

        return nivel;
    }
}

console.log(calcularNivel(experiencia));
for (let experience = 1000; experience <= 30000; experience += 1000) {
    const experienciaFornecida = experience;
    const nivelCorrespondente = calcularNivel(experienciaFornecida);
    console.log(`Com ${experienciaFornecida} pontos de experiência, você está no nível ${nivelCorrespondente}.\n`);
}