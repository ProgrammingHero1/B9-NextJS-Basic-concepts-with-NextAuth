import React from 'react';

const getDetailsPost = async (id) => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const data = await res.json()
   return data
}

export const generateMetadata = async ({params}) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json()
 return {
    title : {
        absolute : `${postData.title}`
    },
    description : postData.body,
    keywords : postData.body.split(' ')
 }
}

const PostDetailsPage = async ({params}) => {
    const {title, body} = await getDetailsPost(params.id)
    return (
        <div className="min-h-screen px-12 py-24 text-3xl">
            <h6 className="mb-6">
                Title : {title}
            </h6>
            <h6>
                Description : {body}
            </h6>
        </div>
    );
}

export default PostDetailsPage;
