class ResidentsController < ApplicationController
  before_action :set_resident, only: [:show, :update, :destroy]

  # GET /residents
  def index
    # byebug
    @residents = Resident.all
    render json: @residents
  end

  # GET /residents/1
  def show
    resident = Resident.find(params[:id])
    render json: resident
  end

  #GET /residentactivities/:id
  def res_activities_route
    activities = Resident.find(params[:id]).activities

    render json: activities
  end

  # POST /residents
  def create
    @resident = Resident.new(resident_params)

    if @resident.save
      render json: @resident, status: :created, location: @resident
    else
      render json: @resident.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /residents/1
  def update
    if @resident.update(resident_params)
      render json: @resident
    else
      render json: @resident.errors, status: :unprocessable_entity
    end
  end

  # DELETE /residents/1
  def destroy
    @resident.destroy
  end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_resident
      @resident = Resident.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def resident_params
      params.require(:resident).permit(:name, :date_of_birth, :phone, :email, :counselor_id, :dorm_id)
    end
end
