class ActivitiesController < ApplicationController
  before_action :set_activity, only: [:show, :update, :destroy]


  def ordered
    activities = Activity.order(:name).pluck(:name)
    render json: activities
  end

  # GET /activities
  def index
    if params[:resident_id]
      resident = Resident.find(params[:resident_id])
      activities = resident.activities
    else
      activities = Activity.all
    end
    
    render json: activities
  end

  # GET /activities/1
  def show
    render json: @activity
  end

  # POST /activities
  def create
    @activity = Activity.new(activity_params)

    if @activity.save
      render json: @activity, status: :created, location: @activity
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /activities/1
  def update
    if @activity.update(activity_params)
      render json: @activity
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  # DELETE /activities/1
  def destroy
    @activity.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_activity
      @activity = Activity.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def activity_params
      params.require(:activity).permit(:name, :day_of_week, :time_of_day, :teacher_id, :resident_id)
    end
end
