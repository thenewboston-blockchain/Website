import React from 'react';

import Commands from 'components/Commands';

const Firewall = () => {
  return (
    <>
      <h2>Firewall</h2>

      <Commands
        code={`sudo ufw app list
sudo ufw allow 'Nginx Full' && sudo ufw allow OpenSSH && sudo ufw enable
`}
        comment="Enable firewall"
      />
      <Commands
        code={`sudo ufw status && systemctl status nginx`}
        comment="Verify that firewall is active and nginx is running"
      />

      <p>You should now be able to visit your server's public IP address and see the welcome page.</p>

      <Commands code={`adduser deploy`} comment="First log in as root, then create the new user" />
      <Commands
        code={`Apples123!`}
        comment="Fill the form and set the password (use different, more secure password after guide is finished)"
      />
      <Commands code={`visudo`} comment="Allow this user to use sudo" />
      <Commands code={`deploy ALL=(ALL) NOPASSWD:ALL`} comment="Add following line into the opened edit" />
      <Commands code={`su - deploy`} comment="Then switch to this new user" />
    </>
  );
};

export default Firewall;
