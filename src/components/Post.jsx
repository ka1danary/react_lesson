import React from "react";
import MyButton from "./UI/button/MyButton";


const Post = function (props) {
    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong> {props.number}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                    <div className="post__btn">
                        <MyButton className="post_button_delete" onClick = { () => props.remove(props.post)}>Delete</MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post