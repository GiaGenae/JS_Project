class StockApi {

    static url = `${BASE_URL}/stocks`

    static showStockForm() {
        let portfolios=document.getElementById("s_portfolio_data");
        portfolios.innerHTML='';
        let html=`
        <form class="form-horizontal" id="stock-form">
            <h3>Add Stock:</h3>
            <div class="form-group">
                <label for="company">Company:</label>
                <input class="form-control" id="company" type="text">
            </div>
            <div class="form-group">
                <label for="ticker">Ticker:</label>
                <input class="form-control" id="ticker" type="text">
            </div>
            <div class="form-group">
                <label for="sector">Sector:</label>
                <select class="form-control" id="sector">
                    <option disabled hidden selected value="">Choose Here</option>
                    <option value="Communication Services">Communication Services</option>
                    <option value="Consumer Discretionary">Consumer Discretionary</option>
                    <option value="Consumer Staples">Consumer Staples</option>
                    <option value="Energy">Energy</option>
                    <option value="Financials">Financials</option>
                    <option value="Industrials">Industrials</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Materials">Materials</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Utilities">Utilities</option>
                </select>
            </div>
            <div class="form-group">
                <label for="s_portfolio">Portfolio:</label>
                <select class="form-control" id="s_portfolio">
                </select>
            </div>
            <div class="form-group">
                <label for="price">Price:</label>
                <input class="form-control" id="price" type="text">
            </div>
            <div class="form-group">
                <label for="shares">Shares:</label>
                <input class="form-control" id="shares" min="1" type="number">
            </div>
            <div class="form-group submit">
                <button class="btn btn-info" type="submit">Submit</button>
            </div>
        </form>`;

        stockFormSection().innerHTML = html;
        PortfoliosApi.dropdownFetchPortfolios()
        stockForm().addEventListener("submit", StockApi.handleSubmit)

    }
}