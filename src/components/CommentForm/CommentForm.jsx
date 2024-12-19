/*import React, {useState } from 'react';
import * as tripService from '../../services/tripService';

const CommentForm = ({ onCommentSubmit }) => {
    const [comment, setComment] = useState({
        text: "",

    });
    const handleChange = (e) => 
        setComment(e.target.value );
    const handleSubmit = async (e) => {
        e.preventDefault();
        onCommentSubmit({ text: "" });
        setComment("");
        //const comment = await hootService.createComment(formData, hootId);

    };
    return  (
        <form onSubmit={handleSubmit}>
        <label htmlFor="text-input">Your comment:</label>
        <textarea
          required
          type="text"
          name="text"
          //id="text-input"
          value={comment}
          onChange={handleChange}
        />
        <button type='submit'> ADD COMMENT</button>
        </form>
    );
};
 
export default CommentForm;
*/