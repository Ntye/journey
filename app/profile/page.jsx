'use client';
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import '../styles/profile.css';
import '../styles/plan.css'
import Link from 'next/link'
import Avatar from '@mui/material/Avatar'

function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Fetch the user data from your API or state management
    const fetchUserData = async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        address: '123 Main St'
      };
      setUser(userData);
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Send updated user data to your API or state management
    console.log('Updated user data:', user);
    setIsEditing(false);
  };

  function stringAvatar(name) {
    return {
      sx: {
        width: 60,
        height: 60,
        bgcolor: "#2e1aa8",
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <div className="profile-container" style={{ padding: '50px' }}>
      <h2 className="noticia-text-bold labelings mb-5">User Profile</h2>
      <h2></h2>
      <Avatar {...stringAvatar(user.name)}/>
      {!isEditing ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
        </div>
      ) : (
        <Form onSubmit={handleFormSubmit} style={{width: 600}} className="mt-3">
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={user.name}
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
              name="phone"
              value={user.phone}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              className="mb-3"
              value={user.address}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button type="submit" className="mr-4 mb-5 submit-button">Save</Button>
          <Button type="button" className="mb-5 cancel-button" onClick={() => setIsEditing(false)}>Cancel</Button>
        </Form>
      )}
      <Link href="/">Go to Home</Link>
    </div>
  );
}

export default UserProfile;
