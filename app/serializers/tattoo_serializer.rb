class TattooSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :style_id, :user_id
end
