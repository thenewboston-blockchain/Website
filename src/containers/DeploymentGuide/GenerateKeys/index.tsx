import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {CodeSnippet, DocSubSection} from 'components';

interface ComponentProps {
  name: string;
  secretKey: string;
}

enum GenerateKeysNav {
  generateKeys = 'generateKeys',
}

const GenerateKeys: FC<ComponentProps> = ({name, secretKey}) => {
  return (
    <DocSubSection className="GenerateKeys" id={GenerateKeysNav.generateKeys} title="Generate Keys">
      <p>
        Need to generate new Secret Key to deploy {name} server. This has to be generated for every deployment. For Refrence: Click <NavLink to="https://docs.djangoproject.com/en/3.1/ref/settings/#secret-key">link</NavLink>
      </p>
      <CodeSnippet code={`mkdir -p ${name} && touch $_/GenSecKeys.py`} heading="Secret Keys Generation" />
      <p>
        Copy all the content from <NavLink to="https://gist.github.com/buckyroberts/f64a5580d55a26f2e7871f06a14c4c8b">Generate Node Keys</NavLink> and save to the file GenSecKeys.py
      </p>
      <CodeSnippet code={`pip install thenewboston
python ${name}/GenSecKeys.py
sudo nano /etc/${name.toLowerCase()}/environment`} />
      <CodeSnippet code={`SECERT_KEY=${secretKey}`} />
    </DocSubSection>
  );
};

export default GenerateKeys;
