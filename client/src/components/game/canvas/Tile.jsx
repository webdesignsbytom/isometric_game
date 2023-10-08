export class Tile {
  constructor(id, offX, offY, fillColor, borderColor) {
    this.id = id;
    this.offX = offX;
    this.offY = offY;
    this.fillColor = fillColor;
    this.borderColor = borderColor;
    this.isHovered = false;
    this.isActive = false;
    this.isOwned = false;
    this.tileColumnOffset = 64;
    this.tileRowOffset = 32;
  }

  drawTile = (context) => {
    // Draw tile interior
    context.beginPath();

    if (this.isActive) {
      context.fillStyle = 'yellow';
    } else if (this.isHovered) {
      context.fillStyle = 'blue';
    } else {
      context.fillStyle = this.fillColor;
    }

    context.moveTo(this.offX, this.offY + this.tileRowOffset / 2);
    context.lineTo(this.offX + this.tileColumnOffset / 2, this.offY);
    context.lineTo(this.offX + this.tileColumnOffset, this.offY + this.tileRowOffset / 2);
    context.lineTo(this.offX + this.tileColumnOffset / 2, this.offY + this.tileRowOffset);
    context.closePath();
    context.stroke();
    context.fill();
  };
}
