class StylesController < ApplicationController

    def index
        render json: Style.all
    end

    def show
        render json: find_style
    end
    

    private
    def find_style
        Style.find(params[:id])
    end
end
