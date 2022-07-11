class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :profile_img
end
