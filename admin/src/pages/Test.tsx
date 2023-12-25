import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Props = {};

function Test({}: Props) {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    // Use an asynchronous function inside useEffect to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get('https://igusers.onrender.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
console.log(users)
    // Call the asynchronous function
    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default Test;
