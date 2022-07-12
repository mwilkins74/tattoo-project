class User < ApplicationRecord
  has_secure_password

  has_many :tattoos
  has_many :styles, through: :tattoos
  
  # validates :password_lower_case
  # validates :password_uppercase
  # validates :password_contains_number

  # def password_uppercase
  #   return if !!password.match(/\p{Upper}/)
  #   errors.add :password, ' must contain at least 1 uppercase '
  # end

  # def password_lower_case
  #   return if !!password.match(/\p{Lower}/)
  #   errors.add :password, ' must contain at least 1 lowercase '
  # end

  # def password_contains_number
  #   return if password.count("0-9") > 0
  #   errors.add :password, ' must contain at least one number'
  # end

  # validates :password, presence: true, uniqueness: true

  validates :username, presence: true, uniqueness: true, exclusion:{
    in: %w(login settings search),
    message: "'%{value} is a reserved username."
  }
  
  validates :email, presence: true, uniqueness: true

end
