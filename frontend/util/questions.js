export const fetchQuestions = (data) => {
   return $.ajax({
      method: 'get',
      url: '/api/questions',
      data: data
   })
}

export const fetchQuestion = (id) => {
   return $.ajax({
      method: 'get',
      url: `/api/questions/${id}`,
   })
}

export const deleteQuestion = (id) => {
   return $.ajax({
      method: 'delete',
      url: `/api/questions/${id}`
   })
}

export const createQuestion = (question) => {
   return $.ajax({
      method: 'post',
      url: '/api/questions',
      data: {question}
   })
}

export const updateQuestion = (question) => {
   return $.ajax({
      method: 'delete',
      url: `/api/questions/${question.id}`,
      data: {question}
   })
}
