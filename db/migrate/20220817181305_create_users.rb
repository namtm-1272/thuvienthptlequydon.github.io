class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :Tk, null: false, index: {unique: true}
      t.string :password_digest
      t.string :name
      t.datetime :birthday
      t.string :email
      t.integer :role, :default => 2

      t.references :class_user, null: true, foreign_key: true
      t.timestamps
    end
  end
end
