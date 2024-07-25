var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domQuerySelect } from "../decorators/domSelector.js";
import { InvestimentoModel } from "../model/InvestimentoModel.js";
import { InvestmentView } from "../view/tiposDeInvestimentoView.js";
export class InvestmentController {
    constructor() {
        this.launchOfInvestments = [
            { tipoDoAtivo: "FIIs", ativo: "MXRF11", quantidade: 5, precoPorUnidade: 10.44, valorTotal: 52.20 },
            { tipoDoAtivo: "FIIs", ativo: "MXRF11", quantidade: 6, precoPorUnidade: 10.44, valorTotal: 52.20 },
            { tipoDoAtivo: "Ações", ativo: "BBDC4", quantidade: 1, precoPorUnidade: 13.73, valorTotal: 13.73 }
        ];
        this.init();
    }
    init() {
        const organize = new InvestimentoModel(this.launchOfInvestments);
        console.log(JSON.stringify(organize.todosOsTiposDeAtivos, null, 2));
        const view = new InvestmentView(organize.todosOsTiposDeAtivos);
    }
}
__decorate([
    domQuerySelect("main")
], InvestmentController.prototype, "main", void 0);
//# sourceMappingURL=investimentosController.js.map