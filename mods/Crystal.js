// Define the crystal element
elements.crystal = {
    color: "#00FFFF",  // The color of the crystal
    behavior: behaviors.SOLID,  // Crystal behaves as a solid
    category: "solids",  // Falls under the solids category
    density: 2500,  // It's denser than water
    tempLow: 0,  // At 0°C or lower, it freezes
    stateLow: "water",  // When it melts, it turns into water
    tempHigh: 500,  // At 500°C, it will shatter
    stateHigh: "shattered_crystal",  // When it shatters, it becomes shattered_crystal
    hardness: 0.9,  // Very hard, resistant to breaking
    flammability: 0,  // Non-flammable
    conduct: 0.05,  // Slight conductor of heat
    reactions: {
        "fire": { "elem1": "shattered_crystal", "temp1": 500 },  // Shatters when in contact with fire at high heat
    },
};

// Define the shattered crystal
elements.shattered_crystal = {
    color: "#99FFFF",  // Lighter blue for shattered parts
    behavior: behaviors.POWDER,  // Turns into powder
    category: "solids",  // It's still solid, just in powdered form
    density: 500,  // Lower density than crystal
    tempLow: -Infinity,  // Can't melt back
    tempHigh: 1000,  // Will evaporate into steam at 1000°C
    stateHigh: "steam",  // Turns into steam at extremely high temperatures
    flammability: 0,  // Non-flammable
};

// Optional: Reaction to freezing water into crystal
elements.water.reactions = {
    "cold": { "elem1": "crystal", "temp1": -5 },  // Freezes water into crystal at cold temperatures
};
