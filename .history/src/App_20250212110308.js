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
    <div style={{ padding: '1rem' }}>
      <input 
        value={value}
        onChange={e => setValue(e.target.value)} 
      />

    </div>
  );
}

export default App;
