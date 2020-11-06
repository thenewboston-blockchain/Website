import React, {FC, useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import {fetchAccessToken} from 'utils/api';

const Auth: FC = () => {
  const {search} = useLocation();
  const history = useHistory();
  const code = new URLSearchParams(search).get('code');

  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (code) {
      try {
        (async () => {
          const response = await fetchAccessToken(code);
          console.log(response);
        })();
      } catch (err) {
        console.log(err);
      } finally {
        setFetching(false);
      }
    } else {
      history.push('/');
    }
  }, [code, history]);

  return <h4>{fetching ? 'Fetching access token...' : 'API request complete!'}</h4>;
};

export default Auth;
