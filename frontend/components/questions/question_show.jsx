import React from 'react';

class QuestionShow extends React.Component {
   constructor(props) {
      super(props);
      this.state = { 
        showResults: false,
         answerThisQuestion: true, 
         body:"", 
         author_id: this.props.currentUser.id
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.createTextbox = this.createTextbox.bind(this);
   }

   componentDidMount() {
      this.props.requestQuestion(this.props.match.params.questionId)
   }

   handleSubmit(e) {
      e.preventDefault();
      this.props.createAnswer({
         body: this.state.body,
         author_id: this.state.author_id,
         question_id: this.props.question.id
      });
      document.getElementById('elementId').value = '';
   }



   handleInput(type) {
      return (e) => {
         this.setState({ [type]: e.target.value })
      }
   }

   createTextbox() {
        
      this.state.showResults ? this.setState({showResults:false}) : this.setState({showResults: true});
      this.state.answerThisQuestion ? this.setState({answerThisQuestion: false}) : this.setState({answerThisQuestion: true});
   }

   render() {
    //    
      if (!this.props.question) {
         return <div></div>
      };
      let answers;
      let hasAnswers = this.props.question.answerIds;
        
      // if (!hasAnswers || hasAnswers.length === 0) {   
      //   answers = 
      //   <p 
      //   className='answer answer-body'
      //   >
      //       Be the first to answer!
      //     </p>
      // } else {
      //   answers = this.props.answers.map(answer => {
            
      //     if (answer.question_id === this.props.question.id) {
      //       return (
      //         <div
      //           className='answer'
      //           key={answer.id}
      //         >
      //           <div className='answer-body'>{answer.body}</div>
      //           <div className='answer-author'>{answer.author}</div>
      //         </div>
      //       )
      //     }
      //   })
      // }

          answers = this.props.answers.map(answer => {

          if (answer.question_id === this.props.question.id) {
            let dateStamp = new Date(answer.created_at);
            const monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];
            let formattedDate = `${monthNames[dateStamp.getMonth()]} ${dateStamp.getDate()}, ${dateStamp.getFullYear()}`;
            return (
              <div
                className='answer'
                key={answer.id}
              >
                <div className='answer-body'>{answer.body}</div>
                <div className='answer-author'>{answer.author}</div>
                <div className='answer-date'>{formattedDate}</div>
              </div>
            )
          }
        })
        
      // if (hasAnswers !== [] && hasAnswers !== undefined && hasAnswers) {
      //   answers = this.props.answers.map(answer => {
      //       
      //       if (answer.question_id === this.props.question.id) {
      //          return (
      //             <div
      //                className='answer'
      //                key={answer.id}
      //             >
      //                <div className='answer-body'>{answer.body}</div>
      //                <div className='answer-author'>{answer.author}</div>
      //             </div>
      //          )
      //       }
      //    })
      // }
     let dateStamp = new Date(this.props.question.created_at);
     const monthNames = ["January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"
     ];
     let formattedDate = `${monthNames[dateStamp.getMonth()]} ${dateStamp.getDate()}, ${dateStamp.getFullYear()}`;








        
      return (
         <ul className="question-index-ul">
            {/* <h1 className="header-title">Recent Questions</h1> */}
            <li className="questions-index questions-index-show">
               <h1 className="questions-index-links">{this.props.question.body}</h1>
               <h2 className="questions-index-author">{this.props.question.author}</h2>
               <p>{formattedDate}</p>
               <div className='questions-index-border'></div>
               <br />
               {answers}
               <br />
               { this.state.showResults ? 
                  <form>
                     <textarea 
                        onChange={this.handleInput('body')} 
                        type="text" 
                        className='answer-input' 
                        id='elementId'
                        placeholder='Answer goes here..'
                     />
                     <br/>
                     <button onClick={this.handleSubmit}>Submit Answer</button>
                  </form> 
                  : '' 
               }
               <button onClick={this.createTextbox} className='create-answer-link'>{this.state.answerThisQuestion ? 'Answer this question' : 'Cancel'}</button>
            </li>
         </ul>
      )
   }
}

export default QuestionShow;