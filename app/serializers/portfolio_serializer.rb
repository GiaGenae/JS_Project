class PortfolioSerializer < ActiveModel::Serializer
  attributes :id, :investor
  has_many :stocks
end
