class Book < ApplicationRecord
  has_one_attached :doc_file
  has_many_attached :doc_file_pages
  belongs_to :subject
  belongs_to :category

  scope :asc_title, ->{order title: :asc}

  delegate :name, to: :subject, prefix: :subject, allow_nil: true
  delegate :name, to: :category, prefix: :category, allow_nil: true
end
