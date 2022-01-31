import React, { useEffect, useState, useCallback } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { useLocation } from "react-router-dom";
import getAcessToken from "../helpers/get_access_token";
import getInfos from "../helpers/get_infos";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function Callback() {
  let query = useQuery();
  let code = query.get("code");
  let [infos, setInfos] = useState(null);
  let loading = !infos;
  const fetchinfos = useCallback(async () => {
    try {
      let { access_token } = await getAcessToken(code);
      let data = await getInfos(access_token);
      console.log(data)
      setInfos(data);
    }catch (err) {
      console.log(err)
      setInfos(err);
    }
    
  }, [code]);
  useEffect(() => {
    if (code) {
      fetchinfos();
    }
  }, [code]);

  return (
    <Card className="w-25 mx-auto mt-5 text-center p-4">
      <Card.Body>
        {infos && 
          (<div>
            <p>user_id: {infos.user_id}</p>
            <p>email: {infos.email}</p>
          </div>)}
        {loading && <Spinner animation="border" variant="primary" />}
      </Card.Body>
    </Card>
  );
}

export default Callback;
