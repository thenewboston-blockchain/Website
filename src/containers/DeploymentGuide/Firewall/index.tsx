import React, {FC} from 'react';

import {Commands, DocSubSection} from 'components';

const Firewall: FC = () => {
  return (
    <DocSubSection className="Firewall" title="Firewall">
      <Commands
        code={`sudo ufw app list
sudo ufw allow 'Nginx Full' && sudo ufw allow OpenSSH && sudo ufw enable
`}
        heading="Enable firewall"
      />
      <Commands
        code={`sudo ufw status && systemctl status nginx`}
        heading="Verify that firewall is active and nginx is running"
      />

      <p>You should now be able to visit your server's public IP address and see the welcome page.</p>

      <Commands code={`adduser deploy`} heading="Create a new user" />
      <Commands code={`> enter a secure password`} heading="Fill the form and set a password" />
      <Commands code={`visudo`} heading="Allow this user to use sudo" />
      <Commands code={`deploy ALL=(ALL) NOPASSWD:ALL`} heading="Add following line into the opened file" />
      <Commands code={`su - deploy`} heading="Switch to that new user" />
    </DocSubSection>
  );
};

export default Firewall;
