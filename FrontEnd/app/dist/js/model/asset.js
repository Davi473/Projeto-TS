export class Asset {
    constructor() {
        this.arrayAsset = [];
    }
    addAsset(name, investment) {
        this.name = name;
        this.organize(investment);
    }
    organize(investmentType) {
        const investment = {
            number: investmentType.number,
            unitaryValue: investmentType.unitaryValue,
            totalValue: investmentType.totalValue
        };
        this.arrayAsset.push(investment);
    }
}
//# sourceMappingURL=asset.js.map