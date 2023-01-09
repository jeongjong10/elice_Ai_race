// Schema 생성
const {Schema} = require('mongoose');
const shortId = require('./types/short-id');

// PostSchema -> 클래스
const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        default: '작성자',
    },
    shortId: shortId,
}, {timestamps: true}
);

module.exports = PostSchema;