import API from "./api";

const requestPosts = () => {
  // 데이터를 적절하게 조합하여 Post 정보를 만들어보세요.
  return Promise.all([API.fetchPosts(),API.fetchUsers()])
    .then(([posts, users])=> {
        posts.map((post)=>{
            // post.userId === user.id를 찾아야함
            const user = users.find(user => user.id === post.userId);
            if (user) {
                post.user = user;
            }
            return post;
        })
        return posts
    })
    .then((posts) => {
        // comments.postId === post.id 한 comments 객체를 찾아야함
        return Promise.all(post.map((post)=>{API.fetchComments(post.postId)}))
            .then((commentsArr)=>{
                posts.map(post => {
                    const comments = commentsArr.find(comments = comments[0].postId === post.id)
                    if (comments) {
                        post.comments = comments
                    }
                    return post
                })
                return posts
            })
    })

};

export default requestPosts;


