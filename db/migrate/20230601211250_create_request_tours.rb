class CreateRequestTours < ActiveRecord::Migration[7.0]
  def change
    create_table :request_tours do |t|

      t.string :time
      t.string :date
      t.string :tour_type
      t.string :name
      t.string :email
      t.string :phone
      t.string :message
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
