class Tattoo < ApplicationRecord
    belongs_to :user
    belongs_to :style

    validates :user_id, presence: true
    validates :style_id, presence: true
end
