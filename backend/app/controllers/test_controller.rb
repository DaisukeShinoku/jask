class TestController < ApplicationController
  def index
    render json: { status: 200, message: Time.now }
  end
end
