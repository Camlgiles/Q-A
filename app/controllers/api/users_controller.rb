class Api::UsersController < ApplicationController

   def create
      @user = User.new(user_params)
      if @user.save
         login!(@user)
         render json: ['Login Successful']
      else 
         render json: @user.errors.full_messages, status: 422
      end
   end

   def index 
      @users = User.all
      render json: @users
   end

   private
   def user_params
      params.require(:user).permit(:username, :email, :password)
   end
   
end
