export class Building {
  constructor(id, name, imageX, offX, offY, width, height) {
    this.id = id;
    this.name = name;
    this.image = imageX;
    this.offX = offX;
    this.offY = offY;
    this.width = width;
    this.height = height;
    this.tileColumnOffset = 64;
    this.tileRowOffset = 32;
  }

  drawBuilding = (context) => {
    console.log('IIIIIIIIIIIIIIIIIIIIIIIIIII');
    // Draw tile interior
    // Draw the building image with the same width and height as the tile
    context.drawImage(
      this.image,
      this.offX,
      this.offY,
      this.tileColumnOffset,
      this.tileRowOffset
    );
  };
}
