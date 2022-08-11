class DormsController < ApplicationController
  before_action :set_dorm, only: [:show, :update, :destroy]

  # GET /dorms
  def index
    @dorms = Dorm.all

    render json: @dorms
  end

  # GET /dorms/1
  def show
    render json: @dorm
  end

  # POST /dorms
  def create
    @dorm = Dorm.new(dorm_params)

    if @dorm.save
      render json: @dorm, status: :created, location: @dorm
    else
      render json: @dorm.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dorms/1
  def update
    if @dorm.update(dorm_params)
      render json: @dorm
    else
      render json: @dorm.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dorms/1
  def destroy
    @dorm.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dorm
      @dorm = Dorm.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def dorm_params
      params.require(:dorm).permit(:name, :floor, :number_of_beds)
    end
end
