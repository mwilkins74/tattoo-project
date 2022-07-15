class UsersController < ApplicationController
	  skip_before_action :authorize, only: [:show, :create, :update]

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    user = User.find(session[:user_id])  
    render json: user
  end

  def update
    user = User.find(params[:id])  
     user.update!(user_params)
     render json: user
  end

  # def update_image
  #   user = @user.update!(user_params)
  #   render json: user.profile_img, status: :accepted
  # end

  # def destroy 
  #   user = User.find(session[:user_id])
  #   user.destroy
  #   head :no_content
  # end

  private

  def user_params
    params.permit(:username, :email, :profile_img, :password, :password_confirmation)
  end
end
