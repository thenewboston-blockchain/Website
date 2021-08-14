import React, {FC} from 'react';

import {DocContainer, DocImage, DocSubSection} from 'components';

import DropdownMenu from './DropdownMenu.png';
import EditNicknameModal from './EditNicknameModal.png';
import EditNicknameResults from './EditNicknameResults.png';

enum WalletEditNicknamesNav {
  editNicknameModal = 'edit-nickname-modal',
  editNicknameResults = 'edit-nickname-results',
}

const WalletEditNicknames: FC = () => {
  return (
    <DocContainer className="WalletEditNicknames" title="Edit Nicknames" lastUpdated="07 Dec 2020">
      <p>
        You can edit the nickname for any item that appears on your left menu (Validators, Banks, Accounts, and Friends)
        by clicking on the 3 dot menu on the top right of that page and selecting the "Edit Nickname" option.
      </p>
      <DocImage alt="dropdown modal" bordered maxWidth={1200} src={DropdownMenu} />

      <DocSubSection id={WalletEditNicknamesNav.editNicknameModal} title="Edit Nickname Form">
        <p>After you have edited the nickname for that object, click the "Save" button to save the changes.</p>
        <DocImage alt="edit nickname modal" bordered maxWidth={1200} src={EditNicknameModal} />
      </DocSubSection>

      <DocSubSection id={WalletEditNicknamesNav.editNicknameResults} title="Edit Nickname Results">
        <p>The updated nickname will then appear both on the left menu as well as in the top title area of the page.</p>
        <p>
          If you wish to remove a nickname completely and use the default label (IP Address or Account Number) you can
          remove the nickname completely inside the "Edit Nickname" form. When the application has no nickname for an
          object, the default label is used instead.
        </p>
        <DocImage alt="edit nickname results" bordered maxWidth={1200} src={EditNicknameResults} />
      </DocSubSection>
    </DocContainer>
  );
};

export default WalletEditNicknames;
