@answers.each do |answer|
   json.set! answer.id do
      json.extract! answer, :id, :body, :question_id, :author_id, :question, :author
   end
end

