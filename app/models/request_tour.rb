class RequestTour < ApplicationRecord
    belongs_to :user
    belongs_to :user, optional: true, foreign_key: :owner_id
    belongs_to :listing, dependent: :destroy
end
  