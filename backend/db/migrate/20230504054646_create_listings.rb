class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
       t.string :home_type, null: false
      t.string :address, null: false
      t.string :street, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip_code, null: false
      t.integer :bedrooms, null: false
      t.integer :bathrooms, null: false
      t.integer :listing_size, null: false
      t.decimal :home_price, null: false
      t.decimal :rent_estimate, null: false
      t.text :home_overview, null: false

      t.timestamps
    end
    
    add_index :listings, :home_type
    add_index :listings, :address
    add_index :listings, :street
    add_index :listings, :city
    add_index :listings, :state
    add_index :listings, :zip_code
    add_index :listings, :bedrooms
    add_index :listings, :bathrooms
    add_index :listings, :listing_size
    add_index :listings, :home_price
    add_index :listings, :rent_estimate
  end
end
