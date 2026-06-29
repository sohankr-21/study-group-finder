import React, { useState } from 'react';
import axios from 'axios';
import './file.css';

function App() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [time, setTime] = useState('');
  const [matches, setMatches] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/auth/signup', { name, subject, time });
    const res = await axios.post('http://localhost:5000/api/groups/match', { subject, time });
    setMatches(res.data);
  };

  return (
    <div className="container">
      <h1>Study Group Finder</h1>
      <form onSubmit={handleSubmit} className="form">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" />
        <input value={time} onChange={e => setTime(e.target.value)} placeholder="Preferred Time" />
        <button type="submit">Join</button>
      </form>
      <h2>Matches</h2>
      <ul>
        {matches.map((m, i) => (
          <li key={i}>{m.name} also studies {m.subject} at {m.time}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
