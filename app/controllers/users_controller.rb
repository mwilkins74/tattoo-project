class UsersController < ApplicationController

  def index
    render json: User.all
  end

  # def show
  #   user = User.find(session[:user_id])
  #   render json: user
  # end

  def show
    user = User.find(params[:id])
    render json: user
  end
end