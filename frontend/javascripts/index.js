document.addEventListener("DOMContentLoaded", () => {
    newFormSection().addEventListener("click", StockApi.showStockForm)
    showPortfolios().addEventListener("click", PortfolioApi.fetchPortfolios)
})