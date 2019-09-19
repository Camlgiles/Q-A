# json.array! @questions do |question|
#    json.extract! question, :id, :body, :author_id, :author
# end

json.questions do
   @questions.each do |question| 
    
      json.set! question.id do
         json.extract! question, :id, :body, :author_id, :created_at

         json.author question.author.username
         json.answerIds question.answer_ids
      end
   end
end

json.answers do
   @questions.each do |question|
      question.answers.each do |answer|
         json.set! answer.id do 
            json.extract! answer, :id, :body, :author_id, :question_id

            json.author answer.author.username
            json.question answer.question.body
         end
      end
   end
end