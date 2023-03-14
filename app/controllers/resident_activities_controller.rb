class ResidentActivitiesController < ApplicationController
  before_action :set_resident_activity, only: [:show, :update, :destroy]

  # GET /resident_activities
  def index
    @resident_activities = ResidentActivity.all

    render json: @resident_activities
  end

  # GET /resident_activities/1
  def show
    render json: @resident_activity
  end

  # POST /resident_activities
  def create
    @resident_activity = ResidentActivity.new(resident_activity_params)

    if @resident_activity.save
      render json: @resident_activity, status: :created, location: @resident_activity
    else
      render json: @resident_activity.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /resident_activities/1
  def update
    if @resident_activity.update(resident_activity_params)
      render json: @resident_activity
    else
      render json: @resident_activity.errors, status: :unprocessable_entity
    end
  end

  # DELETE /resident_activities/1
  def destroy
    @resident_activity.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_resident_activity
      @resident_activity = ResidentActivity.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def resident_activity_params
      params.require(:resident_activity).permit(:resident_id, :activity_id)
    end
end
