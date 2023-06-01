# frozen_string_literal: true

class RequestToursController < ApplicationController
    before_action :authenticate_user!, except: [:index]
    before_action :set_request_tour, only: [ :destroy]
  
    def index
      @request_tours = RequestTour.all
      render json: @request_tours
    end
  
    def create
      if(current_user)
        @request_tour = RequestTour.new(request_tour_params)
        @request_tour.user_id = current_user.id
        if @request_tour.save
  
          render json: @request_tour, status: :created
        else
          render json: @request_tour.errors, status: :unprocessable_entity
        end
      else
        render json: {message: "User Not Found"}, status: :unprocessable_entity
      end
    end
  
    def destroy
      @request_tour = RequestTour.find(params[:id])
      if @request_tour.destroy
        render json: @request_tour, status: :ok
      end
  
      head :no_content
    end
  
    private
  
    def set_request_tour
      @request_tour = RequestTour.find(params[:id])
    end
  
    def request_tour_params
      params.require(:request_tour).permit(:tour_type, :date, :time, :name, :email, :phone, :message)
    end
  end
  