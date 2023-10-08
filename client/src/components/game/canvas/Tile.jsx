export class Tile {
  constructor(id, xpos, offX, ypos, offY, size, fillColor, borderColor) {
    this.id = id;
    this.xpos = xpos;
    this.offX = offX;
    this.ypos = ypos;
    this.offY = offY;
    this.size = size;
    this.fillColor = fillColor;
    this.borderColor = borderColor;
    this.isHovered = false;
    this.isActive = false;
    this.isOwned = false;
    this.tileColumnOffset = 64;
    this.tileRowOffset = 32;
  }

  drawTile = (context) => {
    console.log('OOOOOOOOOOOOOOOOOOOOOOO');
    // Draw tile interior
    context.beginPath();
    context.fillStyle = 'yellow';
    context.moveTo(this.offX, this.offY + this.tileRowOffset / 2);
    context.lineTo(this.offX + this.tileColumnOffset / 2, this.offY);
    context.lineTo(this.offX + this.tileColumnOffset, this.offY + this.tileRowOffset / 2);
    context.lineTo(this.offX + this.tileColumnOffset / 2, this.offY + this.tileRowOffset);
    context.closePath();
    context.stroke();
    context.fill();
  };

  draw(context) {
    // Calculate isometric coordinates
    console.log('This xpos is: ', this.xpos);
    const offX =
      this.xpos * this.tileColumnOffset - this.ypos * this.tileColumnOffset;
    const offY =
      this.xpos * this.tileRowOffset + this.ypos * this.tileRowOffset;

    context.beginPath();

    // Draw tile interior
    context.moveTo(offX, offY + this.tileRowOffset / 2);
    context.lineTo(offX + this.tileColumnOffset / 2, offY);
    context.lineTo(offX + this.tileColumnOffset, offY + this.tileRowOffset / 2);
    context.lineTo(offX + this.tileColumnOffset / 2, offY + this.tileRowOffset);
    context.closePath();

    // Set stroke and fill styles
    context.strokeStyle = this.borderColor;
    context.lineWidth = 2;

    if (this.isActive) {
      context.fillStyle = 'yellow';
    } else if (this.isHovered) {
      context.fillStyle = 'blue';
    } else {
      context.fillStyle = this.fillColor;
    }

    // Draw tile
    context.stroke();
    context.fill();
  }
}
