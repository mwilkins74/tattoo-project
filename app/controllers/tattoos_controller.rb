class TattoosController < ApplicationController

    def index
        render json: Tattoo.all
    end

    def show
        tattoo = find_tattoo
        render json: tattoo
    end

    private

    def tattoo_params
        params.permit(:image, :style_id, :user_id)
    end

    def find_tattoo
        Tattoo.find(params[:id])
    end
end
