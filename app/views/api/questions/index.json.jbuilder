# json.array! @questions do |question|
#    json.extract! question, :id, :body, :author_id, :author
# end

@questions.each do |question| 
   json.questions do
      json.set! question.id do
         json.extract! question, :id, :body, :author_id
      end
   end
   json.authors do
      json.set! question.author.id do
         json.extract! question.author, :id, :username
      end
   end
end