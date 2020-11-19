import React, {FC} from 'react';

import {CodeSnippet, DocSubSection} from 'components';

interface ComponentProps {
  name: string;
}

enum NginxNav {
  nginx = 'nginx',
}

const Nginx: FC<ComponentProps> = ({name}) => {
  return (
    <DocSubSection className="Nginx" id={NginxNav.nginx} title="NGINX">
      <CodeSnippet
        code={`sudo rm /etc/nginx/sites-available/default
sudo nano /etc/nginx/sites-available/default`}
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
        proxy_pass http://django;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Host $server_name;
    }

}`}
        heading="Paste in the following and save"
      />
      <CodeSnippet code="sudo nginx -t" heading="Test configuration" />
    </DocSubSection>
  );
};

export default Nginx;
