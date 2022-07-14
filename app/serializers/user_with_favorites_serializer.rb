class UserWithFavoritesSerializer < ActiveModel::Serializer
    attributes :id, :username, :password, :email, :profile_img
    has_many :favorites
    has_many :tattoos, through: :favorites
end
