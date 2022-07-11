class StylesController < ApplicationController

    def index
        render json: Style.all
    end

    def show
        render json: Style.find(params[:id])
    end
    

    private
    def find_style
        Style.find(params[:id])
    end
end
