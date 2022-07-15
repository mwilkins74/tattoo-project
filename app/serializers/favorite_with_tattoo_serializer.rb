class FavoriteWithTattooSerializer < ActiveModel::Serializer
    attributes :user_id, :tattoo_id, :show_tattoo

    def show_tattoo
        favorites.tattoo
    end
end