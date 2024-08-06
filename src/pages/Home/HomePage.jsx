import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleJoin = useCallback(() => {
    if (value && name) {
      navigate(`/pages/room/${value}?name=${name}`);
    }
  }, [navigate, value, name]);

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
      <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter room code" />
      <button onClick={handleJoin}>Join</button>
    </div>
  );
};

export default HomePage;
