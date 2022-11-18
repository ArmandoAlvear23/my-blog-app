import {useState} from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Forest Adventures', body: 'lorem ipsum...', author: 'Link', id: 1 },
        { title: 'Ranch Activites', body: 'lorem ipsum...', author: 'Epona', id: 2 },
        { title: 'Castle Diaries', body: 'lorem ipsum...', author: 'Zelda', id: 3 },
    ]);
    
    return (
      <div className="home">
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>{ blog.author }</p>
            </div>
        ))}
      </div>
    );
}

export default Home;