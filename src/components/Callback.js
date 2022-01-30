import React from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { useLocation } from "react-router-dom";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Callback() {
  let query = useQuery();
  let loading = !query.get("code") && !query.get("access_token")
  return (
    <Card className="w-25 mx-auto mt-5 text-center p-4">
      <Card.Body>
        <Card.Text>
          {loading &&  <Spinner animation="border" variant="primary" />}
          {query.get("code") &&  <p>code: {query.get("code")}</p>}
          {query.get("access_token") &&  <p>access_token: {query.get("access_token")}</p>}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Callback;
