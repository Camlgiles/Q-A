@answers.each do |answer|
   json.set! answer.id do
      json.extract! answer, :id, :body, :question_id, :author_id
      json.author answer.author.username
      json.question answer.question.body
   end
end

