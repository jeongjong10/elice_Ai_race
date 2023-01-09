// Use Mongoose
// 1. Schema 정의
// 2. 모델 생성
// 3. 데이터 베이스 연결
// 4. 모델 사용

// Let definite Schema
const {Schema} = require('mongoose'); 

const PostSchema = new Schema({
    title: { String, required: true},
    content: { String, required: ture},
},{timestamps: true});

module.exports = PostSchema;