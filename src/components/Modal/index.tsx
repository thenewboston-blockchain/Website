import React, {CSSProperties, FC, ReactNode, useMemo} from 'react';
import {createPortal} from 'react-dom';
import clsx from 'clsx';
import noop from 'lodash/noop';
import {bemify} from '@thenewboston/utils';

import {Form, FormButton, FormButtonProps} from 'components/FormComponents';
import Icon, {IconType} from 'components/Icon';
import Loader from 'components/FormElements/Loader';
import {GenericFormValues} from 'types/forms';
import {GenericFunction} from 'types/generic';

import './Modal.scss';

export interface ModalButtonProps extends FormButtonProps {
  content: ReactNode;
}

interface ComponentProps {
  cancelButton?: ModalButtonProps | string;
  className?: string;
  close(): void;
  footer?: ReactNode;
  header?: ReactNode;
  ignoreDirty?: boolean;
  initialValues?: GenericFormValues;
  onSubmit: GenericFunction;
  style?: CSSProperties;
  submitButton?: ModalButtonProps | string;
  submitting?: boolean;
  validationSchema?: any;
}

const Modal: FC<ComponentProps> = ({
  cancelButton,
  children,
  className,
  close,
  footer,
  header,
  ignoreDirty: ignoreDirtyProps = false,
  initialValues = {},
  onSubmit,
  style,
  submitButton,
  submitting = false,
  validationSchema,
}) => {
  const ignoreDirty = useMemo<boolean>(() => ignoreDirtyProps || Object.keys(initialValues).length === 0, [
    ignoreDirtyProps,
    initialValues,
  ]);

  const cancelProps = useMemo<ModalButtonProps>(() => {
    if (typeof cancelButton === 'string') {
      return {
        content: cancelButton,
        ignoreDirty,
        onClick: close,
        submitting,
        variant: 'link',
      };
    }
    return {
      className: cancelButton?.className ?? undefined,
      color: cancelButton?.color ?? undefined,
      content: cancelButton?.content ?? 'Cancel',
      disabled: cancelButton?.disabled ?? undefined,
      ignoreDirty: cancelButton?.ignoreDirty ?? ignoreDirty,
      onClick: cancelButton?.onClick ?? close,
      submitting: cancelButton?.submitting ?? submitting,
      type: cancelButton?.type ?? undefined,
      variant: cancelButton?.variant ?? 'link',
    };
  }, [cancelButton, close, ignoreDirty, submitting]);

  const submitProps = useMemo<ModalButtonProps>(() => {
    if (typeof submitButton === 'string') {
      return {
        content: submitButton,
        ignoreDirty,
        submitting,
        type: 'submit',
      };
    }
    return {
      className: submitButton?.className ?? undefined,
      color: submitButton?.color ?? undefined,
      content: submitButton?.content ?? 'Submit',
      disabled: submitButton?.disabled ?? undefined,
      ignoreDirty: submitButton?.ignoreDirty ?? ignoreDirty,
      onClick: submitButton?.onClick ?? undefined,
      submitting: submitButton?.submitting ?? submitting,
      type: submitButton?.type ?? 'submit',
      variant: submitButton?.variant ?? undefined,
    };
  }, [ignoreDirty, submitButton, submitting]);

  const renderDefaultFooter = (): ReactNode => {
    return (
      <>
        <FormButton
          className={clsx('Modal__default-cancel', cancelProps.className, {
            ...bemify(className, '__default-cancel'),
          })}
          color={cancelProps.color}
          disabled={cancelProps.disabled}
          ignoreDirty={cancelProps.ignoreDirty}
          onClick={cancelProps.onClick}
          submitting={cancelProps.submitting}
          type={cancelProps.type}
          variant={cancelProps.variant}
        >
          {cancelProps.content}
        </FormButton>
        <FormButton
          className={clsx('Modal__default-submit', submitProps.className, {
            ...bemify(className, '__default-submit'),
          })}
          color={submitProps.color}
          disabled={submitProps.disabled}
          ignoreDirty={submitProps.ignoreDirty}
          onClick={submitProps.onClick}
          submitting={submitProps.submitting}
          type={submitProps.type}
          variant={submitProps.variant}
        >
          {submitting ? <Loader /> : submitProps.content}
        </FormButton>
      </>
    );
  };

  const renderResponsiveHeader = (): ReactNode => {
    return (
      <>
        <Icon
          className={clsx('Modal__close-icon', {
            'Modal__close-icon--submitting': submitting,
            ...bemify(className, '__close-icon'),
            ...bemify(className, '__close-icon--submitting', submitting),
          })}
          disabled={submitting}
          icon={IconType.close}
          onClick={close}
        />
        {typeof header === 'string' ? <h2>{header}</h2> : header}
        <FormButton
          className={clsx('Modal__default-submit', submitProps.className, {
            ...bemify(className, '__default-submit'),
          })}
          color={submitProps.color}
          disabled={submitProps.disabled}
          ignoreDirty={submitProps.ignoreDirty}
          onClick={submitProps.onClick}
          submitting={submitProps.submitting}
          type={submitProps.type}
          variant={submitProps.variant}
        >
          {submitting ? <Loader /> : submitProps.content}
        </FormButton>
      </>
    );
  };

  return createPortal(
    <>
      <div
        role="contentinfo"
        className={clsx('Modal__overlay', {
          'Modal__overlay--submitting': submitting,
          ...bemify(className, '__overlay'),
          ...bemify(className, '__overlay--submitting', submitting),
        })}
        onClick={submitting ? noop : close}
      />
      <div
        className={clsx(
          'Modal',
          {'Modal--default-position': !style, ...bemify(className, '--default-position', !style)},
          className,
        )}
        style={style}
      >
        <div className={clsx('Modal__header', {...bemify(className, '__header')})}>
          {typeof header === 'string' ? <h2>{header}</h2> : header}
          <Icon
            className={clsx('Modal__close-icon', {
              'Modal__close-icon--submitting': submitting,
              ...bemify(className, '__close-icon'),
              ...bemify(className, '__close-icon--submitting', submitting),
            })}
            disabled={submitting}
            icon={IconType.close}
            onClick={close}
          />
        </div>
        <Form initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <div className={clsx('Modal__header_mobile', {...bemify(className, '__header_mobile')})}>
            {footer || renderResponsiveHeader()}
          </div>
          <div className={clsx('Modal__content', {...bemify(className, '__content')})}>{children}</div>
          <div className={clsx('Modal__footer', {...bemify(className, '__footer')})}>
            {footer || renderDefaultFooter()}
          </div>
        </Form>
      </div>
    </>,
    document.getElementById('modal-root')!,
  );
};

export default Modal;
