class TattooSerializer < ActiveModel::Serializer
  attributes :id, :image, :style_id, :user_id
end
