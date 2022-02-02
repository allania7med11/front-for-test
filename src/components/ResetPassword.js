import React, { useEffect, useState, useCallback } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

function ResetPassword() {
  let { uid, token } = useParams();
  return (
    <Card className="w-50 mx-auto mt-5 p-4">
      <Card.Body>
        <div>Uid:</div>
        <div className="text-secondary px-2">{uid}</div>
        <div>Token:</div>
        <div className="text-secondary px-2">{token}</div>
      </Card.Body>
    </Card>
  );
}

export default ResetPassword;
