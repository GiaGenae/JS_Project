class Portfolio {

    static all = []
    static dropDownOptions = []

    constructor({id, investor, stocks}) {
        this.id = id;
        this.investor = investor;
        this.stocks = stocks;
        Portfolio.all.push(this)
    }
}