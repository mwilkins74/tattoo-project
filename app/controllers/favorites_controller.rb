class FavoritesController < ApplicationController

    def index
        render json: Favorite.all
        # , serializer: FavoriteWithTattooSerializer
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


    private
    
    def favorite_params
        params.permit(:user_id, :tattoo_id)
    end

    def find_favorite
        Favorite.find(params[:id])
    end
end
