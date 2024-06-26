'use client';
import React, { useState, useEffect, useContext } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import '../styles/profile.css';
import '../styles/plan.css';
import Avatar from '@mui/material/Avatar';
import { GlobalContext } from '@/app/context/GlobalContext'
import axiosInstance from '@/components/axios'

function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    dateOfBirth: '',
    email:'',
    tel: '',
    sex: ''
  });
  const [isLoading,setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated } = useContext(GlobalContext);

  useEffect(() => {
    const fetchUserData = async () => {

      // const userData = {
      //   firstname: 'John',
      //   lastname: 'Doe',
      //   email: 'john@example.com',
      //   phone: '123-456-7890',
      //   address: '123 Main St'
      // };

      axiosInstance.get('/v1/auth/verify-token')
      .then(response => {
        setUser(response.data)
        console.log(response.data)
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false)
      });
      // setUser(userData);
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleLogout = (e) => {
    setIsAuthenticated({
      auth: false,
      token: "",
    });
    localStorage.removeItem('token');
    console.log(isAuthenticated)
    router.push('/');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Send updated user data to your API or state management
    console.log('Updated user data:', user);
    setIsEditing(false);
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    if (!name) return {};
    const nameParts = name.split(' ');
    return {
      sx: {
        width:60,
        height:60,
        bgcolor: stringToColor(name),
      },
      children: `${nameParts[0][0]}${nameParts[1] ? nameParts[1][0] : ''}`,
    };
  }

  if(isLoading) {
    return (
      <div>is loading ...</div>
    )
  }

  return (
    <div className="profile-container" style={{ padding: '30px' }}>
      <h2 className="noticia-text-bold labelings mb-5">User Profile</h2>
      <Avatar {...stringAvatar(user.name+' '+user.surname)} />
      {!isEditing ? (
        <div className="mb-5">
          <h2 className="entries-display noticia-text-regular"><strong>First Name:</strong> {user.name}</h2>
          <h2 className="entries-display noticia-text-regular"><strong>Last Name:</strong> {user.surname}</h2>
          <h2 className="entries-display noticia-text-regular"><strong>Date of birth:</strong> {user.dateOfBirth}</h2>
          <h2 className="entries-display noticia-text-regular"><strong>Email:</strong> {user.email}</h2>
          <h2 className="entries-display noticia-text-regular"><strong>Phone:</strong> {user.tel}</h2>
          <h2 className="entries-display noticia-text-regular"><strong>Sex:</strong> {user.sex}</h2>
          <Button className="profile-button mt-8" onClick={() => setIsEditing(true)}>Edit</Button>
        </div>
      ) : (
        <Form onSubmit={handleFormSubmit} style={{ width: 600 }} className="mt-3">
          <Form.Group controlId="firstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="lastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              value={user.surname}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="tel"
              value={user.tel}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button type="submit" className="mr-4 submit-button">Save</Button>
          <Button type="button" className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</Button>
        </Form>
      )}
      <Button type="submit" className="mt-3 mr-4 cancel-button" onClick={handleLogout}>LOGOUT</Button>
    </div>
  );
}

export default UserProfile;
