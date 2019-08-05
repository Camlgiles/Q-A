class Api::SessionsController < ApplicationController

   def create 
      @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

      if @user.nil?
         render json: ['Invalid Username or Passsword'], status: 422
      else 
         login!(@user)
         # display user profile page
         render 'api/users/show'
      end
   end

   def destroy 
      @user = current_user
      if @user
         logout!
         render "api/users/show"
      else
         render json: ['nobody signed in'], status: 404
      end
   end

end
