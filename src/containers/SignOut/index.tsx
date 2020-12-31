import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {unsetActiveUser} from 'store/app';
import {AppDispatch} from 'types/store';

const SignOut = () => {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  useEffect(() => {
    dispatch(unsetActiveUser());
    history.push('/');
  }, [dispatch, history]);

  return null;
};

export default SignOut;
