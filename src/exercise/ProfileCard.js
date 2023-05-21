import React, { useState } from 'react';

const ProfileCard = (props) => {
  const { fullName, job, dept } = props;
  const [name, setName] = useState(fullName);
  const [occupation, setOccupation] = useState(job);
  const [department, setDpt] = useState(dept);
  const [count, setCount] = useState(0);

  const changeAll = () => {
    setName('BEN');
    setOccupation('DENTIST');
    setDpt('HR');
  };

  return (
    <div>
      <h3>{name}</h3>
      <small>{occupation}</small>
      <p>{department}</p>
      <button onClick={() => setName('BEN')}>click to change name</button>
      <button onClick={() => setOccupation('DENTIST')}>
        click to change occupation
      </button>
      <button onClick={() => setDpt('HR')}>click to change department</button>
      <button onClick={changeAll}>change all</button>

      <button onClick={() => setCount(count + 1)}>clicky wicky my dicky</button>
      <p>{count}</p>
    </div>
  );
};

export default ProfileCard;
