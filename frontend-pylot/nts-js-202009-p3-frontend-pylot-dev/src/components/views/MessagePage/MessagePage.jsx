import React from 'react';
import useStyle from './styleMessagePage';

import Footer from '../../common/Footer/Footer';

function MessagePage() {
  const classes = useStyle();

  return (
    <>
      <div className={classes.container}>
        <div>Bientôt disponible 😉</div>
      </div>
      <Footer />
    </>
  );
}

export default MessagePage;
