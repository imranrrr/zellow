class ApplicationController < ActionController::API
  def decoded_token
    JWT.decode(token, Rails.application.credentials.secret_key_base, true, { algorithm: 'HS256' }).first
  end

  def token
    request.headers['Authorization']&.split(' ')&.last
  end

  def current_user
    if(token)
      User.find_by(jti: decoded_token['jti'])
    end
  end
end
