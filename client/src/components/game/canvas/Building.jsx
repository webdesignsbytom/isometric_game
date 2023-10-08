export class Building {
  constructor(id, name, imageX, offX, offY, width, height) {
    this.id = id;
    this.name = name;
    this.image = imageX;
    this.offX = offX;
    this.offY = offY;
    this.width = width;
    this.height = height;
  }

  drawBuilding = (context) => {
    console.log('IIIIIIIIIIIIIIIIIIIIIIIIIII');
    // Draw tile interior
    context.drawImage(this.image, this.offX, this.offY);
  };
}
