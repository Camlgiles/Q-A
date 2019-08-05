export const fetchAnswers = (data) => {
   return $.ajax({
      method: 'get',
      url: '/api/answers',
      data: data
   })
}

export const fetchAnswer = (id) => {
   return $.ajax({
      method: 'get',
      url: `/api/answers/${id}`,
   })
}

export const deleteAnswer = (id) => {
   return $.ajax({
      method: 'delete',
      url: `/api/answers/${id}`
   })
}

export const createAnswer = (answer) => {
   return $.ajax({
      method: 'post',
      url: '/api/answers',
      data: { answer }
   })
}

export const updateAnswer = (answer) => {
   return $.ajax({
      method: 'delete',
      url: `/api/answers/${answer.id}`,
      data: { answer }
   })
}