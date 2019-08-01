json.array! @questions do |question|
   json.extract! question, :id, :body, :author_id
end