'use strict'

const Post = use('App/Models/Post')


// TODO: not working
class Post extends Model {
  static boot () {
    super.boot()

    this.addTrait('@provider:Lucid/Slugify', {
      fields: { slug: 'title' },
      strategy: 'dbIncrement',
      disableUpdates: false
    })
  }
}
module.exports = Post
