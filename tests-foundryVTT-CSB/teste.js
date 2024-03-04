function calculateLevel(experience) {
    if (experience < 1000) {
      return 1; // Nível 1 é o mínimo
    } else if (experience < 3000) {
      return 2; // Se a experiência estiver entre 1 e 100, o personagem está no nível 2
    } else {
      let level = 3; // Começamos a verificar a partir do nível 2
      let currentExperience = 3000; // A experiência necessária para o nível 2
  
      // Iterativamente, calculamos o nível com base na experiência fornecida
      while (true) {
        let nextExperience = currentExperience + (currentExperience - 100 + 1000);
        if (experience < nextExperience) {
          return level;
        }
        level++;
        currentExperience = nextExperience;
      }
    }
  }
  
  for (let experience = 1000; experience <= 30000; experience += 1000) {
    const level = calculateLevel(experience);
    console.log(`O personagem está no nível ${level} e tem ${experience} pontos de experiência.`);
}