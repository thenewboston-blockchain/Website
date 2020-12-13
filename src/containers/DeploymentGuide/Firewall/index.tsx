import React, {FC} from 'react';

import {CodeSnippet, DocSubSection} from 'components';

enum FirewallNav {
  firewall = 'firewall',
}

const Firewall: FC = () => {
  return (
    <DocSubSection className="Firewall" id={FirewallNav.firewall} title="Firewall">
      <CodeSnippet
        code={`sudo ufw app list
sudo ufw allow 'Nginx Full' && sudo ufw allow OpenSSH && sudo ufw enable`}
        heading="Enable firewall"
      />
      <CodeSnippet
        code="sudo ufw status && systemctl status nginx"
        heading="Verify that firewall is active and nginx is running"
      />

      <p>You should now be able to visit your server's public IP address and see the welcome page.</p>

      <CodeSnippet code="sudo adduser deploy" heading="Create a new user" />
      <CodeSnippet code="> enter a secure password" heading="Fill the form and set a password" />
      <CodeSnippet code="sudo visudo" heading="Allow this user to use sudo" />
      <CodeSnippet code="deploy ALL=(ALL) NOPASSWD:ALL" heading="Add following line into the opened file" />
      <CodeSnippet code="su - deploy" heading="Switch to that new user" />
    </DocSubSection>
  );
};

export default Firewall;
