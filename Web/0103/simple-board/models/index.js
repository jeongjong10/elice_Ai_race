// 스케마 로드 후 모델 생성 
const mongoose = require('mongoose');
const PostSchema = require('./schemas/post');

exports.Post = mongoose.model('Post', Postschema);