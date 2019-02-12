'use strict'

class CreateUser {
  get rules () {
    return {
      'username': `required|unique:users, username, ${this.username}`,
      'email': 'required|unique:users, email, ${this.email}',
      'password': 'required'
    }
  }

  get messages() {
    return {
      'required': 'The {{ field }} field is required.',
      'unique': 'The {{ field }} already exists'
    }
  }

  async fails(error) {
    this.ctx.session.withErrors(error)
      .flashAll();
    
    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateUser
