json.extract! @answer, :id, :body, :question_id, :author_id, :created_at

json.author @answer.author.username
json.question @answer.question.body