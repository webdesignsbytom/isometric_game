export class Building {
  constructor(id, name, imageUrl, offX, offY, cost, currencyType, incomeSeconds) {
    this.id = id;
    this.name = name;
    this.image = imageUrl;
    this.offX = offX;
    this.offY = offY;
    this.cost = cost;
    this.currencyType = currencyType;
    this.tileColumnOffset = 64;
    this.tileRowOffset = 32;
    this.isUnderConstruction = false;
    this.isCompleted = false;
    this.payoutReady = false;
    this.payoutCollectionTime = new Date(Date.now() + incomeSeconds);
  }

  drawBuilding = (context, goldCoinRef) => {
    // Draw tile interior
    // Draw the building image with the same width and height as the tile
    context.drawImage(
      this.image,
      this.offX,
      this.offY,
      this.tileColumnOffset,
      this.tileRowOffset
    );
    if (this.payoutReady) {
      console.log('XXXXXXXXXXXXXXXXXXXXXX');
      context.drawImage(
        goldCoinRef.current,
        this.offX + 15,
        this.offY - 25,
      );
    }
  };

  update(context, offsetX, offsetY) {
    this.offX = offsetX - this.tileColumnOffset / 2;
    this.offY = offsetY - this.tileRowOffset / 2;
    this.drawBuilding(context);
  }

  setPosition(context, xpos, ypos) {
    this.offX = xpos;
    this.offY = ypos;
  }

  collectPayout(){
    console.log('OOOOOOOOO');
    this.payoutReady = false;
  }
}
