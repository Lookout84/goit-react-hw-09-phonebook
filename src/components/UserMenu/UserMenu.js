import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/Auth';
import defaultAvatar from './default-avatar.png';
import { Button, Badge, Form } from 'react-bootstrap';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUseremail);

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div>
      <Form inline>
        <img src={defaultAvatar} alt="" width="32" />
        <Badge variant="dark">
          <span>{email}</span>
        </Badge>{' '}
        <Button variant="success" type="button" onClick={onLogOut}>
          Logout
        </Button>{' '}
      </Form>
    </div>
  );
}
