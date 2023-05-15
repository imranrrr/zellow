class FavoritesController < ApplicationController
  before_action :authenticate_user!

  def index
    @favorites = current_user.favorites
    listings = @favorites.map do |favorite|
      listing = favorite.listing
      favorite = current_user&.favorites&.exists?(listing_id: listing.id)
      listing.as_json.merge(favorite: favorite)
    end
   
    render json: listings
  end

  def create
    @favorite = current_user.favorites.new(listing_id: params[:favorite][:listing_id])
    if @favorite.save
      render json: { status: 'success', message: 'Listing added to favorites!' }
    else
      render json: { status: 'error', message: 'Something went wrong, please try again later.' }
    end
  end

  def destroy
    @favorite = current_user.favorites.find_by(listing_id: params[:id])
    if @favorite.destroy
      render json: { status: 'success', message: 'Listing removed from favorites!' }
    else
      render json: { status: 'error', message: 'Something went wrong, please try again later.' }
    end
  end
end
