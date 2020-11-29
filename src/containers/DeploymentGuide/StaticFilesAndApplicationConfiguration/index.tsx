import React, {FC, ReactNode} from 'react';

import {CodeSnippet, DocSubSection} from 'components';

interface ComponentProps {
  initializationCommand: ReactNode;
  name: string;
}

enum StaticFilesAndApplicationNav {
  staticFilesAndApplication = 'static-files-and-application',
}

const StaticFilesAndApplication: FC<ComponentProps> = ({initializationCommand, name}) => {
  return (
    <DocSubSection
      className="StaticFilesAndApplication"
      id={StaticFilesAndApplicationNav.staticFilesAndApplication}
      title="Static Files and Application Configuration"
    >
      <CodeSnippet code="nano ~/.profile" heading="Set environment variable" />

      <CodeSnippet
        code={`export DJANGO_APPLICATION_ENVIRONMENT="production"
export NETWORK_SIGNING_KEY="YOUR_NID_SIGNING_KEY"
export SECRET_KEY="YOUR_SECRET_KEY"`}
      />

      <CodeSnippet
        code={`logout
su - deploy
printenv`}
        heading="Log out and log back in"
      />

      <CodeSnippet
        code={`# Create a new user (or more precisely, a role)
sudo -u postgres createuser --interactive

Enter name of role to add: thenewboston
Shall the new role be a superuser? (y/n) y

# Create new database
sudo -u postgres createdb thenewboston

# Set a password for the user
sudo -u postgres psql template1
ALTER USER thenewboston PASSWORD 'thenewboston';

# Exit prompt
\\q`}
        heading="Initialize database"
      />

      <CodeSnippet
        code={`cd /var/www/${name}/
python3 manage.py makemigrations && python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py collectstatic`}
        heading="Populate database"
      />
      {initializationCommand}
      <CodeSnippet code="http://[IP_ADDRESS]/config" heading="Verify everything is working correctly by visiting" />
    </DocSubSection>
  );
};

export default StaticFilesAndApplication;
