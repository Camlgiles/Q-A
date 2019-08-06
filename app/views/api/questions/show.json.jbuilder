json.extract! @question, :id, :body, :author_id

json.author @question.author.username