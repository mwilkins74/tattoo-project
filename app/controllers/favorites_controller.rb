class FavoritesController < ApplicationController

    def index
        render json: Favorite.all
    end

    def show 
        favorite = find_favorite
        render json: favorite
    end

    def update
        favorite = favorite.update!(favorite_params)
        render json: favorite, status: :accepted
    end

    def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    def destroy
        favorite = Favorite.find(session[:user_id])
        favorite.destroy
        head :no_content
    end
    # def user_favorites_destroy
    #     user = User.find(session[:user_id])
    #     if user
    #         tattoos = user.favorites
    #         tattoos.destroy
    #     else
    #         render json: {message: "Tattoo not found"}, status: :not_found
    #     end
    # end
    
    def user_favorites
        user = User.find(session[:user_id])
        if user
            render json: user.favorites
        else
            render json: {message: "User not found"}, status: :not_found
        end
    end

    private
    
    def favorite_params
        params.permit(:user_id, :tattoo_id)
    end

    def find_favorite
        Favorite.find(params[:id])
    end
end
