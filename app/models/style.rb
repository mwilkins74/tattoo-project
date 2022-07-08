class Style < ApplicationRecord
    has_many :tattoos 
    has_many :users, through: :tattoos
end
