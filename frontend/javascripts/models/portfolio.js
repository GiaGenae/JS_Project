class Portfolio {

    static all = []
    static dropDownOptions = []

    constructor({id, investor, stocks}) {
        this.id = id;
        this.investor = investor;
        this.stocks = stocks;
        Portfolio.all.push(this)
    }

    static getAll() {
        return this.all
    }

    static findByName(investor) {
       return this.all.find(function(portfolio) { portfolio.investor === investor})
    }

    static findById(portfolio_id) {
        return this.all.find(portfolio => portfolio.portfolio_id === portfolio_id)
    }

    static findOrCreateBy(pObj) {
        return this.findByName(pObj.investor) || new Portfolio(pObj)
    }
}