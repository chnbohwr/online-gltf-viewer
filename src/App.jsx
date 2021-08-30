import React, { useState } from 'react'
import Draw from './Draw';

window.URL = window.URL || window.webkitURL || window.mozURL;

function App() {
  const [objectUrl, setObjectUrl] = useState('');
  const onChangeFile = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setObjectUrl(url);
  }
  return (
    <div className="App">
      <input type="file" onChange={onChangeFile} placeholder="choose glb/gltf file" />
      <Draw objectUrl={objectUrl} />
    </div>
  )
}

export default App
