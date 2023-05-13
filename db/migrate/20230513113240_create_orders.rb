class CreateOrders < ActiveRecord::Migration[7.0]
  def change

    create_table :orders do |t|
      t.text :orders_input
      t.text :name
      t.text :phone
      t.text :address
      t.timestamps
    end

  end
end