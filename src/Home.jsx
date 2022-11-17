const Home = () => {

    const handleClick = () => {
        console.log('hello, mondo');
    }

    const handleClick2 = (name) => {
        console.log(`Hello, ${name}`);
    }

    return (
      <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={() => handleClick2('person viewing my github')}>Click me 2.0</button>
      </div>
    );
}

export default Home;