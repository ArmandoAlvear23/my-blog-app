import {useState} from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Forest Adventures', body: 'lorem ipsum...', author: 'Link', id: 1 },
        { title: 'Ranch Activites', body: 'lorem ipsum...', author: 'Epona', id: 2 },
        { title: 'Castle Diaries', body: 'lorem ipsum...', author: 'Zelda', id: 3 },
    ]);
    
    return (
      <div className="home">
        <BlogList blogs={blogs} title="All Blogs" />
      </div>
    );
}

export default Home;