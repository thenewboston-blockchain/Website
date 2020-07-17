import React from 'react';

import Commands from 'components/Commands';

const StaticFilesAndApplication = () => {
  return (
    <>
      <h2>Static files and Application Configuration</h2>

      <Commands code={`nano ~/.profile`} comment="Set environment variable" />

      <Commands code={`export DJANGO_APPLICATION_ENVIRONMENT="production"`} />

      <Commands
        code={`logout
su - deploy
printenv
`}
        comment="Log out and log back in"
      />

      <Commands
        code={`cd /var/www/Validator/
python3 manage.py makemigrations && python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py collectstatic
`}
        comment="Set up database"
      />
      <Commands code={`python3 manage.py initialize_validator`} comment="Initialize server as primary validator" />
      <Commands code={`http://[IP_ADDRESS]/config`} comment="Verify everything is working correctly by visiting" />
    </>
  );
};

export default StaticFilesAndApplication;
