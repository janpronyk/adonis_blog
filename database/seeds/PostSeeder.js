'use strict'

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class PostSeeder {
  async run () {
    const postsArray = await Factory
        .model('App/Models/Post')
        .createMany(5)
    const posts = await Database.table('posts')
    console.log(posts);
  }
}

module.exports = PostSeeder
