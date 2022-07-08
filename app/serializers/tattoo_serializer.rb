class TattooSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :style_id, :user_id
end
