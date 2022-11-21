import { useState } from "react";

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Epona');

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        > </textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => {setAuthor(e.target.value)}}
        >
          <option value="Epona">Epona</option>
          <option value="Link">Link</option>
          <option value="Zelda">Zelda</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
