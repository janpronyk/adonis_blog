'use strict'

class PostController {

    async index({ view }) {


        const posts = [
            {title: 'My first post', content: 'Hello there from post ONE'},
            {title: 'My second post', content: 'Hello there from post TWO'},
            {title: 'My third post', content: 'Hello there from post THREE'}
        ]

        return view.render('posts.index', { title: 'Latest posts', posts })
    }

}

module.exports = PostController
