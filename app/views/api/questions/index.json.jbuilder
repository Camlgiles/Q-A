# json.array! @questions do |question|
#    json.extract! question, :id, :body, :author_id, :author
# end

@questions.each do |question| 
      json.set! question.id do
            json.extract! question, :id, :body, :author_id

            json.author question.author.username

      end

   
     # json.set! question.author.id do
     #    json.extract! question.author, :id, :username
     # end
end

