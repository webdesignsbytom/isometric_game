export class Troop {
  constructor(
    id,
    name,
    title,
    cost,
    type,
    timeToTrain,
    strength,
    defense,
    health,
    imageUrl,
    description
  ) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.cost = cost;
    this.type = type;
    this.timeToTrain = timeToTrain;
    this.strength = strength;
    this.defense = defense;
    this.health = health;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  drawTroop() {
  }
}
