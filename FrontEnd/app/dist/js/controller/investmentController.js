var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domQuerySelect } from "../decorators/domSelector.js";
import { InvestmentModel } from "../model/investmentModel.js";
export class InvestmentController {
    constructor() {
        this.launchOfInvestments = [
            { assetType: "FIIs", asset: "MXRF11", number: 5, unitaryValue: 10.44, totalValue: 52.20 },
            { assetType: "Ações", asset: "BBDC4", number: 1, unitaryValue: 13.73, totalValue: 13.73 }
        ];
        this.init();
    }
    init() {
        const organize = new InvestmentModel();
        for (const asset of this.launchOfInvestments) {
            console.log(asset);
            organize.organize(asset);
            return asset;
        }
    }
}
__decorate([
    domQuerySelect("main")
], InvestmentController.prototype, "main", void 0);
//# sourceMappingURL=investmentController.js.map