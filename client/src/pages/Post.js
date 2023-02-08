import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { publicRequest } from '../requestMethod';


const Post = () => {

    const [post, setPost] = useState({});
    const { id } = useParams();
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const res = await publicRequest.get(`/posts/byId/${id}`);
            setPost(res.data)
            //console.log(res.data)

            const cmts = await publicRequest.get(`/comments/${id}`)
            setComments(cmts.data)
            //console.log(cmts.data)
        }
        getData();
    }, [newComment])


    const addComment = async () => {
        const response = await publicRequest.post('/comments', {
            commentBody: newComment,
            PostId: id
        },
            {
                headers: {
                    accessToken: sessionStorage.getItem("accessToken"),
                }
            })
        setNewComment("")
        console.log(response.data.error)

        if (response.data.error) {
            alert("please login first")
            navigate("/login")
        }
        // if (response.data.error) {
        //     toast.error(response.data.error, {
        //         position: "top-center",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "dark",
        //         });
        //     return;
        // }
        console.log("added comment successfully")
    }


    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                    <div className="title"> {post.title} </div>
                    <div className="body">{post.postText}</div>
                    <div className="footer">{post.username}</div>
                </div>
            </div>
            <div className="rightSide">
                <div className="addCommentContainer">
                    <input type="text"
                        placeholder='Comment...'
                        autoComplete='off'
                        value={newComment}
                        onChange={(e) => { setNewComment(e.target.value) }} />
                    <button onClick={addComment}>Add Comment</button>
                </div>
                <div className="listOfComments">
                    {
                        comments.map((comment) => {
                            return (
                                <div key={comment.id} className="comment">
                                    {comment.commentBody}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Post