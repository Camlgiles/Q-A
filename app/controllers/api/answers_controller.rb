class Api::AnswersController < ApplicationController
      
   def create
      #   
      @answer = Answer.new(answer_params)
      @answer.author_id = current_user.id
      if @answer.save
         render :show
      else
         render json: @answer.errors.full_messages, status: 422
      end
   end

   def show
      @answer = Answer.find(params[:id])
      if @answer
         render :show
      else
         render json: @answer.errors.full_messages, status: 404
      end
   end
   
   def index
      @answers = Answer.all.includes(:author)
   end

   def edit
      @answer = Answer.find(params[:id])
      render :edit
   end

  def update
      @answer = Answer.find(params[:id])
      if @answer.update(answer_params)
         render :show
      else
         render json: @answer.errors.full_messages, status: 422
      end
   end

  def destroy
      @answer = Answer.find(params[:id])
      if @answer.destroy
         render :show
      else
         render plain: "You can't destroy what's not there."
      end
   end
   
   
   private
   def answer_params
      params.require(:answer).permit(:body, :author_id, :question_id)
   end
end
