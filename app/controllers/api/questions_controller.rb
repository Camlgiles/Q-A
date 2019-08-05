class Api::QuestionsController < ApplicationController

   def create
      @question = Question.new(question_params)
      @question.author_id = current_user.id
      if @question.save
         render json: 'Successful'
      else
         render json: @question.errors.full_messages, status: 422
      end
   end

   def show
      @question = Question.find(params[:id])
      if @question
         render :show
      else
         render json: @question.errors.full_messages, status: 404
      end
   end

   def index
      # @questions = if params[:user_id]
      #                render json: Question.where(author_id: params[:user_id])
      #             else
      #                render json: Question.all
      #             end
      @questions = Question.all.includes(:author)
   end

   def edit
      @question = Question.find(params[:id])
      render :edit
   end

  def update
      @question = Question.find(params[:id])
      if @question.update(question_params)
         render json: 'successful'
      else
         render json: @question.errors.full_messages, status: 422
      end
   end

  def destroy
      @question = Question.find(params[:id])
      if @question.destroy
         render json: 'successful'
      else
         render plain: "You can't destroy what's not there."
      end
   end


   private
   def question_params
      params.require(:question).permit(:body, :author_id)
   end

end
