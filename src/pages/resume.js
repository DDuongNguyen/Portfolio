import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import resume from '../images/Resume.jpg';
import resume1 from '../Duong_Nguyen_Resume.pdf';
import { Document } from 'react-pdf';

export default () => {
  const { title, lang, description } = headData;

  return (
    <div style={{ height: '100vh' }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      {/* <Document file='' /> */}
      <iframe
        src="https://drive.google.com/file/d/1UMUf2C-roB8Q1RExsUC_LKEfk_hFtTxQ/preview"
        width="100%"
        height="100%"
      />
    </div>
  );
};
