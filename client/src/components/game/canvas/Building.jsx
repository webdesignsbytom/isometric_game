export class Building {
  constructor(
    id,
    name,
    title,
    imageUrl,
    description,
    gridSize,
    xpForPurchasing,
    cost,
    currencyType,
    incomeSeconds,
    incomeAmount,
    incomeCurrency,
    incomePeriod,
    constructionTime,
    constructionTimePeriod,
    constructionImage,
    offX,
    offY,
    imageHeight
  ) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.image = imageUrl;
    this.description = description;
    this.gridSize = gridSize;
    this.xpForPurchasing = xpForPurchasing;
    this.cost = cost;
    this.currencyType = currencyType;
    this.incomeSeconds = incomeSeconds;
    this.incomeAmount = incomeAmount;
    this.incomeCurrency = incomeCurrency;
    this.incomePeriod = incomePeriod;
    this.constructionTime = constructionTime;
    this.constructionTimePeriod = constructionTimePeriod;
    this.constructionImage = constructionImage;
    this.offX = offX;
    this.offY = offY;
    this.imageHeight = imageHeight;
    // Permanent initialization
    this.tileColumnOffset = 64;
    this.tileRowOffset = 32;
    this.isUnderConstruction = false;
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
      this.imageHeight
    );
    if (this.payoutReady) {
      context.drawImage(goldCoinRef.current, this.offX + 15, this.offY - 25);
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

  collectPayout() {
    this.payoutReady = false;
    this.payoutCollectionTime = new Date(Date.now() + this.incomeSeconds);
  }

  updatePosition() {
  }
}
