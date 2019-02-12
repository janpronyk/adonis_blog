'use strict'

const Post = use('App/Models/Post')
const Database = use('Database')

class PostController {

    async index({ view }) 
    {
        const query = Database.table('posts')
        
        const posts = await query.orderBy('id', 'desc')

        return view.render('posts.index', { title: 'Latest posts', posts: posts })
    }

    async details({ view, params }) 
    {

        const query = Database.table('posts')
        const post = await query.where('id', params.slug).first()
        // console.log(post);
        

        return view.render('posts.details', { post })

    }

    async add({ view }) 
    {
     
        return view.render('posts.add')
    
    }

    async store({ request, response, session }) 
    {

        let post = new Post()

        post.title = request.input('title')
        post.slug = request.input('title')
        post.body = request.input('body')

        await post.save()

        session.flash({ notification: 'Post has been added succesfully'})

        return response.redirect('/posts')

    }

    async edit({ view, params }) {

        const query = Database.table('posts')
        const post = await query.where('id', params.slug).first()

        return view.render('posts.edit', { post })

    }

    async update({ view, params, request, response  }) {

        const slug = params.slug


        const post = await Post.find(params.slug)

        post.title = request.input('title')
        post.body = request.input('body')

        await post.save()

        return response.redirect('/posts')

    }

    async destroy({ params, session, response }) {

        const post = await Post.find(params.slug)        

        await post.delete()

        session.flash({ notification: 'Post has been deleted!'})

        return response.redirect('/posts')
    }
}

module.exports = PostController
