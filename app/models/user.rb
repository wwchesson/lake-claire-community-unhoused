class User < ApplicationRecord
    validates :name, presence: true, length: {minimum: 2}
    validates :username, presence: true, uniqueness: true, length: {minimum: 8}
    validates :password, presence: true, length: {minimum: 8}
    # validates :password_confirmation, presence: true, length: {minimum: 8}

    has_secure_password
end
