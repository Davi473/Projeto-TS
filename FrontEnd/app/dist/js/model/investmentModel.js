import { AssetType } from "./assetType.js";
export class InvestmentModel {
    constructor() {
        this.investments = [];
    }
    organize(newInvestment) {
        this.comparison(newInvestment);
        this.alreadyInTheArray(newInvestment);
    }
    comparison(newInvestment) {
        if (!this.investments.some(investment => investment.name === newInvestment.assetType)) {
            const assetType = new AssetType();
            assetType.addAssetType(newInvestment.assetType);
            this.investments.push(assetType);
        }
    }
    alreadyInTheArray(newInvestment) {
        for (const investment of this.investments) {
            this.compareTheObjects(investment, newInvestment);
        }
    }
    compareTheObjects(investment, newInvestment) {
        if (investment.name === newInvestment.assetType) {
            investment.organize(newInvestment);
            return;
        }
    }
}
//# sourceMappingURL=investmentModel.js.map