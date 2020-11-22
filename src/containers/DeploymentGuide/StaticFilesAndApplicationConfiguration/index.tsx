import React, {FC, ReactNode} from 'react';

import {CodeSnippet, DocSubSection} from 'components';

interface ComponentProps {
  initializationCommand: ReactNode;
  name: string;
  networkSigningKey: string;
}

enum StaticFilesAndApplicationNav {
  staticFilesAndApplication = 'static-files-and-application',
}

const StaticFilesAndApplication: FC<ComponentProps> = ({initializationCommand, name, networkSigningKey}) => {
  return (
    <DocSubSection
      className="StaticFilesAndApplication"
      id={StaticFilesAndApplicationNav.staticFilesAndApplication}
      title="Static Files and Application Configuration"
    >
      <CodeSnippet code="nano ~/.profile" heading="Set environment variable" />

      <CodeSnippet
        code={`export DJANGO_APPLICATION_ENVIRONMENT="production"
export NETWORK_SIGNING_KEY="${networkSigningKey}"`}
      />

      <CodeSnippet
        code={`logout
su - deploy
printenv`}
        heading="Log out and log back in"
      />

      <CodeSnippet
        code={`cd /var/www/${name}/
python3 manage.py makemigrations && python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py collectstatic`}
        heading="Set up database"
      />
      {initializationCommand}
      <CodeSnippet code="http://[IP_ADDRESS]/config" heading="Verify everything is working correctly by visiting" />
    </DocSubSection>
  );
};

export default StaticFilesAndApplication;
