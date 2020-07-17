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
    server 127.0.0.1:8001;
}

server {
    listen 80 default_server;
    server_name localhost;
    charset utf-8;
    client_max_body_size 75M;

    location /media {
        alias /var/www/Validator/media;
    }

    location /static {
        alias /var/www/Validator/static;
    }

    # Send all non-media requests to the Django server
    location / {
        uwsgi_pass django;
        include /var/www/Validator/uwsgi_params;
    }

}
`}
        comment="Paste in the following and save"
      />
      <Commands code={`sudo nginx -t`} comment="Test configuration" />
    </>
  );
};

export default NGINX;
