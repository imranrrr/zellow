# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  respond_to :json

  def create
    super do |user|
      data = {
        user: user
      }
      render json: data, status: 201 and return
    end
  end

  private

  def respond_to_on_destroy
    if(current_user)
      render json: { message: 'Successfully logged out' }, status: 200
    else
      render json: { message: 'logged out Failled' }, status: 401
    end
  end
end
