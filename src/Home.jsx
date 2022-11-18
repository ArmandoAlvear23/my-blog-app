import {useState} from 'react'

const Home = () => {

    const [name, setName] = useState('Epona');
    const [age, setAge] = useState(7);

    const handleClick = () => {
        if(name === 'Epona')
        {
            setName('Zelda');
            setAge(25);
        } else {
            setName('Epona');
            setAge(8);
        }
    }
    
    return (
      <div className="home">
        <h2>Homepage</h2>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
}

export default Home;