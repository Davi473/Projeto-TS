import { AssetType } from "./assetType.js";
export class InvestmentModel {
    constructor() {
        this.investments = [];
    }
    organize(newInvestment) {
        if (!this.investments.some(investment => investment.name === newInvestment.assetType)) {
            const assetType = new AssetType();
            assetType.addAssetType(newInvestment.assetType, newInvestment);
            this.addInvestment(assetType);
        }
        console.log(JSON.stringify(this.investments));
    }
    addInvestment(value) {
        this.investments.push(value);
    }
}
//# sourceMappingURL=investmentModel.js.map