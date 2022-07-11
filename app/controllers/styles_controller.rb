class StylesController < ApplicationController

    def index
        render json: Style.all
    end

    def show
        style = find_style
        render json: style
    end

    private
    def find_style
        Style.find(params[:id])
    end
end
