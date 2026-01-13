const plantsBySeason = {
  Spring: ["Tomatoes", "Lettuce", "Roses"],
  Summer: ["Sunflowers", "Cucumbers", "Peppers"],
  Autumn: ["Garlic", "Spinach", "Chrysanthemums"],
  Winter: ["Kale", "Broccoli", "Evergreens"]
};

function suggestPlants(season) {
  return plantsBySeason[season] || ["No specific suggestions available"];
}

console.log(suggestPlants("Spring"));
// Output: ["Tomatoes", "Lettuce", "Roses"]
const advice = {
  tomato: {
    Spring: "Plant seedlings in nutrient-rich soil.",
    Summer: "Water regularly and provide support stakes.",
    Autumn: "Harvest ripe fruits and prepare soil.",
    Winter: "Protect from frost or grow indoors."
  },
  rose: {
    Spring: "Prune and fertilize for healthy growth.",
    Summer: "Water deeply and mulch around roots.",
    Autumn: "Deadhead flowers and prepare for dormancy.",
    Winter: "Protect from frost and avoid overwatering."
  }
};
