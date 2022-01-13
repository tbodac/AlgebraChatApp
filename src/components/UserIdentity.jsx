//random generated user visual identity
export const randomName = () => {
    const adjectives = [
        "Able", "Bad", "Best", "Certain", "Clear", "Different", "Free", "Full", "Good",
        "Great", "Hard", "High", "Important", "Large", "Late", "Little", "Lonely",
        "Real", "Right", "Small", "Social", "Special", "Strong", "True", "Young"
    ];
    const animals = [
        "Dog", "Cat", "Horse", "Chicken", "Fish", "Bear", "Bird", "Shark", "Snake",
        "Pig", "Lion", "Wolf", "Spider", "Rabbit", "Duck", "Deer", "Cow", "Monkey",
        "Lobster", "Gorilla", "Pony", "Eagle", "Dolphin", "Bison", "Turtle"
    ];
    const silly = adjectives[Math.floor(Math.random() * adjectives.length)];
    const identity = animals[Math.floor(Math.random() * animals.length)];
    return silly + " " + identity;
};

export const randomColor = () => {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
};