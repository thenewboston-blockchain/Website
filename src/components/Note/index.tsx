import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';

import {Icon, IconType} from '@thenewboston/ui';
import './Note.scss';

export enum NoteType {
  Important = 'important',
  Information = 'information',
}

type Props = {
  className?: string;
  text: ReactNode;
  type: NoteType;
};

const TYPE_TO_ICON_AND_TITLE_MAPPING: Record<NoteType, {icon: IconType; title: string}> = {
  [NoteType.Important]: {icon: IconType.alertCircle, title: 'Important'},
  [NoteType.Information]: {icon: IconType.pencil, title: 'Note'},
};

const Note: FC<Props> = ({className, text, type}) => {
  const {icon, title} = TYPE_TO_ICON_AND_TITLE_MAPPING[type];
  return (
    <div className={clsx(`Note Note--${type}`, className)}>
      <span className={`Note__highlight Note__highlight--${type}`}>
        <Icon className={`Note__highlight-icon Note__highlight-icon--${type}`} icon={icon} />
        {title}
      </span>
      <div className="Note__text">{text}</div>
    </div>
  );
};

export default Note;
