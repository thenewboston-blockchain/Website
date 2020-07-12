import React from 'react';

import Commands from 'components/Commands';

const NGINX = () => {
  return (
    <>
      <h2>NGINX</h2>

      <Commands
        code={`sudo rm /etc/nginx/sites-available/default
sudo nano /etc/nginx/sites-available/default
`}
        comment="Create NGINX configuration"
      />
      <Commands
        code={`upstream django {
\tserver 127.0.0.1:8001;
}

server {
\tlisten 80 default_server;
\tserver_name localhost;
\tcharset utf-8;
\tclient_max_body_size 75M;

\t# Django media
\tlocation /media {
\t\talias /var/www/Validator/media;
\t}

\tlocation /static {
\t\talias /var/www/Validator/static;
\t}

\t# Send all non-media requests to the Django server
\tlocation / {
\t\tuwsgi_pass django;
\t\tinclude /var/www/Validator/uwsgi_params;
\t}

}
`}
        comment="Paste in the following and save"
      />
      <Commands code={`sudo nginx -t`} comment="Test configuration" />
    </>
  );
};

export default NGINX;
