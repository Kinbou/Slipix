/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import axios from 'axios';

import './emailVerification.scss';
import { urlBack, urlLocal } from 'src/utils/selectors';
import Loader from 'src/frontend/components/Loader';

const EmailVerification = () => {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get('id');
  const hash = new URLSearchParams(search).get('hash');
  const expires = new URLSearchParams(search).get('expires');
  const signature = new URLSearchParams(search).get('signature');
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (id && hash && expires && signature) {
      console.log('test');
      axios.get(`${urlLocal}/api/auth/email/verify/${id}/${hash}?expires=${expires}&signature=${signature}`, { headers: { Accept: 'application/json' } })
        .then((result) => {
          setIsValid(true);
          setMessage(result.data.message);
        })
        .catch((err) => {
          setIsValid(false);
          setMessage(err.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    else {
      Redirect('/');
    }
  }, [id, hash, expires, signature]);

  return (
    <div className="emailVerification">
      <h1 className="globalTitle-page">Vérification Email</h1>
      <div className="emailVerification__content">
        {loading ? <Loader />
          : (
            <>
              {isValid ? (
                <div>{message}</div>
              ) : (
                <div>{message}</div>
              )}
              <Link to="/" className="emailVerification__content__redirection">Retour sur l'accueil du site</Link>
            </>
          )}
      </div>
    </div>
  );
};

export default EmailVerification;
