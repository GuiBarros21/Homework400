const mongoose = require('mongoose')
const { Schema, model, SchemaTypes } = mongoose

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        lowercase: true,
    },
    published: {
        type: String,
        default: false,
    },
    author: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    content: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updatedAt: Date,
    comments: [{
        user: {
            type: SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
        },
        content: String
    }]
})

blogSchema.pre('save', function(next){
    const blog = this
    blog.updatedAt = Date.now()
    next()
})

const commentsSchema = new Schema({
    comments: {
        id: String,
        name: String,
        comments: String,
        date: Date
    },
    content: String,
    
        
    })
    commentsSchema.pre('save', function(next){
        const comments = this
        blog.comments.id = SchemaTypes.ObjectId,
        blog.comments.name = 'User',
        blog.comments.comments = comments
        next();
})


const Blog = model('Blog', blogSchema)
module.exports = Blog