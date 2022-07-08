class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :age
end
