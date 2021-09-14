class StockSerializer < ActiveModel::Serializer
  attributes :id, :company, :ticker, :sector, :price
  belongs_to :portflio 
end
