import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import google_link from '../helpers/google_link';

function SocialLogin() {
  return (
    <Card className="w-25 mx-auto mt-5 text-center p-4">
      <Card.Body>
        <Card.Title className="mb-4">Social Login</Card.Title>
        <Card.Text>
          <Button href={google_link} variant="primary">Google</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SocialLogin;
