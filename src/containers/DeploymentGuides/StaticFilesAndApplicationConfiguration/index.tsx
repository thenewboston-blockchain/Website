import React, {FC, ReactNode} from 'react';

import Commands from 'components/Commands';

interface ComponentProps {
  initializationCommand: ReactNode;
  name: string;
  networkSigningKey: string;
}

const StaticFilesAndApplication: FC<ComponentProps> = ({initializationCommand, name, networkSigningKey}) => {
  return (
    <>
      <h2>Static files and Application Configuration</h2>

      <Commands code={`nano ~/.profile`} comment="Set environment variable" />

      <Commands
        code={`export DJANGO_APPLICATION_ENVIRONMENT="production"
export NETWORK_SIGNING_KEY="${networkSigningKey}"`}
      />

      <Commands
        code={`logout
su - deploy
printenv
`}
        comment="Log out and log back in"
      />

      <Commands
        code={`cd /var/www/${name}/
python3 manage.py makemigrations && python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py collectstatic
`}
        comment="Set up database"
      />
      {initializationCommand}
      <Commands code={`http://[IP_ADDRESS]/config`} comment="Verify everything is working correctly by visiting" />
    </>
  );
};

export default StaticFilesAndApplication;
