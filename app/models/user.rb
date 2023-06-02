class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  has_many :listings
  has_many :favorites
  has_many :request_tours, foreign_key: :owner_id
  has_many :favorite_listings, through: :favorites, source: :listing

end
