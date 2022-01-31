import React, { useEffect, useState, useCallback } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { useLocation, useParams } from "react-router-dom";
import getOurTokens from "../helpers/get_our_tokens";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const DisplayObject = ({ obj }) => {
  if (!(typeof obj === "object")) {
    return <div className="text-secondary px-2">{obj}</div>;
  }
  if (Array.isArray(obj)) {
    return (
      <>
        {obj.map((elm, index) => (
          <div key={index}>
            <DisplayObject obj={elm} />
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      {Object.keys(obj).map((label, index) => (
        <div key={index}>
          {label}: {<DisplayObject obj={obj[label]} />}
        </div>
      ))}
    </>
  );
};
function Callback() {
  const { provider } = useParams();
  let query = useQuery();
  let code = query.get("code");
  let [infos, setInfos] = useState(null);
  const fetchinfos = useCallback(async () => {
    try {
      let data = await getOurTokens(provider, code);
      console.log(data);
      setInfos(data);
    } catch (err) {
      console.log(err.response.data);
      setInfos("err");
    }
  }, [code]);
  useEffect(() => {
    if (code) {
      fetchinfos();
    }
  }, [code]);

  return (
    <Card className="w-25 mx-auto mt-5 p-4">
      <Card.Body>
        {infos && (
          <div>
            <p>Provider: {provider}</p>
            <p>Infos:</p>
            <DisplayObject obj={infos} />
          </div>
        )}
        {!infos && <Spinner animation="border" variant="primary" />}
      </Card.Body>
    </Card>
  );
}

export default Callback;
