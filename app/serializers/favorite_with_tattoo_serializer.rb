class FavoriteWithTattooSerializer < ActiveModel::Serializer
    attributes :user_id, :tattoo_id, :label, :show_tattoo

    def show_tattoo
        favorites.tattoo
    end
end