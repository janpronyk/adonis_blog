'use strict'

class Post {
  get rules () {
    return {
      // validation rules
      title: `required|min:3|max:220|unique:posts,title,${this.title}`,
      slug: `max:240|unique:posts,slug,${this.slug}`,
      body: `required|min:3|max:2200|`
    }
  }

  get messages () {
    return {
      'title.required': 'You must provide a title for the post.',
      'body.required': 'You must provide a body for the post.',
      // 'email.unique': 'This email is already registered.',
      // 'password.required': 'You must provide a password'
    }
  }

  get sanitizationRules () {
    return {
      title: 'escape',
      slug: 'escape|slug',
      body: 'escape'
    }
  }

  async fails (errorMessages) {
    this.ctx.session.withErrors(errorMessages).flashAll()
    return this.ctx.response.redirect('back')
  }
}

module.exports = Post
