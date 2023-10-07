export class Tile {
  constructor(id, xpos, ypos, size, fillColor, borderColor) {
    this.id = id;
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
    this.fillColor = fillColor;
    this.borderColor = borderColor;
    this.isHovered = false;
    this.isActive = false;
    this.isOwned = false;
  }

  draw(context) {
    context.strokeStyle = this.borderColor;
    context.lineWidth = 2;
    context.strokeRect(this.xpos, this.ypos, this.size, this.size);

    if (this.isActive) {
      context.fillStyle = 'yellow';
    } else if (this.isHovered) {
      context.fillStyle = 'blue';
    } else {
      context.fillStyle = this.fillColor;
    }

    context.fillRect(
      this.xpos + 2,
      this.ypos + 2,
      this.size - 4,
      this.size - 4
    );
  }
}
