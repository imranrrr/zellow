class Listing < ApplicationRecord
  has_many_attached :images
  belongs_to :user
  has_many :favorites
  has_many :request_tours
  has_many :favorited_by, through: :favorites, source: :user

  def favorited_by_current_user
    !!favorited_by.include?(User.current)
  end

  def image_urls
    images.map { |image| Rails.application.routes.url_helpers.url_for(image) }
  end

  def as_json(options = {})
    super(options.merge(methods: [:image_urls]))
  end
end
