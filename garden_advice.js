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