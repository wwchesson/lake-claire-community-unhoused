class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user, status: :created
    end

    def index
        @users = User.all
        render json: @users
    end

    # def getresidents
    #     @residents = User.where(type: "Resident")
    #     render json: @residents
    # end

    private
    def user_params
        params.permit(:firstname, :lastname, :username, :password, :password_confirmation)
    end

end
