import React, {FC} from 'react';

import {CodeSnippet, DocSubSection} from 'components';

interface ComponentProps {
  name: string;
}

const Nginx: FC<ComponentProps> = ({name}) => {
  return (
    <DocSubSection className="Nginx" title="NGINX">
      <CodeSnippet
        code={`sudo rm /etc/nginx/sites-available/default
sudo nano /etc/nginx/sites-available/default
`}
        heading="Create NGINX configuration"
      />
      <CodeSnippet
        code={`upstream django {
    server 127.0.0.1:8001;
}

server {
    listen 80 default_server;
    server_name localhost;
    charset utf-8;
    client_max_body_size 75M;

    location /media {
        alias /var/www/${name}/media;
    }

    location /static {
        alias /var/www/${name}/static;
    }

    # Send all non-media requests to the Django server
    location / {
        uwsgi_pass django;
        include /var/www/${name}/uwsgi_params;
    }

}
`}
        heading="Paste in the following and save"
      />
      <CodeSnippet code="sudo nginx -t" heading="Test configuration" />
    </DocSubSection>
  );
};

export default Nginx;
