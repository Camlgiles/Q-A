# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
   validates :body, presence: true

   belongs_to :author, 
      foreign_key: :author_id,
      class_name: :User

   has_many :answers, 
      foreign_key: :question_id,
      class_name: :Answer
   

end
