import './App.css';
import { useEffect, useState } from'react';

function App() {

  const [value, setValue] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json)
    .then(posts => setPosts(posts))
  }, []);


  return (
    <div>

    </div>
  );
}

export default App;
