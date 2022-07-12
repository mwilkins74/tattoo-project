class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :profile_img
end
