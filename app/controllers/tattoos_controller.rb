class TattoosController < ApplicationController

    def index
        tattoo = Tattoo.all
        p tattoo
        render json: tattoo
    end

    def show
        tattoo = find_tattoo
        render json: tattoo
    end

    private

    def tattoo_params
        params.permit(:image_url, :style_id, :user_id)
    end

    def find_tattoo
        Tattoo.find(params[:id])
    end
end
