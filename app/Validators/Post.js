'use strict'

class Post {
  get rules () {
    return {
      // validation rules
      title: `required|min:3|max:220|unique:posts,title,${this.title}`,
      slug: `max:240|unique:posts,slug,${this.slug}`,
      body: `required|min:3`
    }
  }

  get messages() {
    return {
      'required': 'The {{ field }} field is required.',
      'unique': 'The {{ field }} already exists'
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
