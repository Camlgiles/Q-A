json.question do
   json.extract! @question, :id, :body, :author_id, :created_at
   json.author @question.author.username
end

json.answers do
   @question.answers.each do |answer|
      json.set! answer.id do 
         json.extract! answer, :id, :body, :author_id, :question_id

         json.author answer.author.username
         json.question answer.question.body
      end
   end
end