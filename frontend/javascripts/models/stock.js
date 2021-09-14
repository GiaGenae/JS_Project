class Stock {

    static all = []

    constructor({portfolio, company, ticker, sector, price, id}) {
        this.portfolio = portfolio;
        this.company = company;
        this.ticker = ticker;
        this.sector = sector;
        this.price = price;
        this.id = id;
        Stock.all.push(this)
    }
}