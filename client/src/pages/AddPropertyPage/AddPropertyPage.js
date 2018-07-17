import React from 'react';
import { Card } from 'react-materialize';
import SignupNav from '../../components/SignupNav/SignupNav'
import AddPropertyForm from '../../_containers/AddPropertyForm';

const AddPropertyPage = () => (
  <div className="container">
    <SignupNav />
    <Card>
      <h1>Add a new property</h1>
      <AddPropertyForm />
    </Card>
  </div>
)

export default AddPropertyPage;