class UserWithTattooSerializer < ActiveModel::Serializer
    attributes :id, :username, :password, :email, :profile_img

    has_many :tattoos
end
