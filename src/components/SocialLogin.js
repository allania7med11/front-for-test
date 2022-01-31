import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { google_link, facebook_link } from "../helpers/social_links";

function SocialLogin() {
  return (
    <Card className="w-25 mx-auto mt-5 text-center p-4">
      <Card.Body>
        <Card.Title className="mb-4">Social Login</Card.Title>
        <div className="d-flex justify-content-center">
          <Button href={google_link} variant="success mx-3">
            Google
          </Button>
          <Button href={facebook_link} variant="primary mx-3">
            Facebook
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SocialLogin;
