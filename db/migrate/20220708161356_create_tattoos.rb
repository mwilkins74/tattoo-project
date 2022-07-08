class CreateTattoos < ActiveRecord::Migration[6.1]
  def change
    create_table :tattoos do |t|
      t.string :name
      t.string :image
      t.integer :style_id
      t.integer :user_id

      t.timestamps
    end
  end
end
