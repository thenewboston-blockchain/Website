import React, {FC} from 'react';

import {A, DocSubSection} from 'components';

enum KeyGenerationNav {
  keyGeneration = 'key-generation',
}

const KeyGeneration: FC = () => {
  return (
    <DocSubSection className="KeyGeneration" id={KeyGenerationNav.keyGeneration} title="Key Generation">
      <p>
        Before deploying server, run{' '}
        <A href="https://gist.github.com/buckyroberts/f64a5580d55a26f2e7871f06a14c4c8b">this script</A> to generate all
        keys that will be needed later for configuration.
      </p>
    </DocSubSection>
  );
};

export default KeyGeneration;
