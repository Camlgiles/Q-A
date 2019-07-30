class UsersController < ApplicationController

   def new
      @user = User.new
      render :new
   end

   def create
      @user = User.new(user_params)
      if @user.save
         login!(@user)
         render json: 'Login Successful'
      else 
         render :new
      end
   end

   def index 
      @users = User.all
      render json: @users
   end

   private
   def user_params
      params.require(:user).permit(:username, :password)
   end
   
end
