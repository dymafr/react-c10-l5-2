import React, { useEffect, useState } from 'react';

function App() {
  console.log('Rendu du composant App');
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('Dyma');

  useEffect(() => {
    console.log('Effet !');
    document.title = title;
  }, [title]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <input
        className="m-10"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
}

export default App;
