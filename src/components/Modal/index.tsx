import React, {CSSProperties, FC, ReactNode, useMemo} from 'react';
import {createPortal} from 'react-dom';
import clsx from 'clsx';
import noop from 'lodash/noop';

import {Form, FormButton, FormButtonProps} from 'components/FormComponents';
import Icon, {IconType} from 'components/Icon';
import Loader from 'components/FormElements/Loader';
import {getCustomClassNames} from 'utils/components';

import {GenericFormValues} from '../../types/forms';
import {GenericFunction} from '../../types/generic';

import './Modal.scss';

export interface ModalButtonProps extends FormButtonProps {
  content: ReactNode;
}

interface ComponentProps {
  cancelButton?: ModalButtonProps | string;
  className?: string;
  close(): void;
  disableOverlayClick?: boolean;
  displayCancelButton?: boolean;
  displayCloseButton?: boolean;
  displaySubmitButton?: boolean;
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
  disableOverlayClick = false,
  displayCancelButton = true,
  displaySubmitButton = true,
  footer,
  header,
  displayCloseButton = true,
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
        {displayCancelButton && (
          <FormButton
            className={clsx('Modal__default-cancel', cancelProps.className, {
              ...getCustomClassNames(className, '__default-cancel', true),
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
        )}
        {displaySubmitButton && (
          <FormButton
            className={clsx('Modal__default-submit', submitProps.className, {
              ...getCustomClassNames(className, '__default-submit', true),
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
        )}
      </>
    );
  };

  const renderResponsiveHeader = (): ReactNode => {
    return (
      <>
        {displayCloseButton && (
          <Icon
            className={clsx('Modal__close-icon', {
              'Modal__close-icon--submitting': submitting,
              ...getCustomClassNames(className, '__close-icon', true),
              ...getCustomClassNames(className, '__close-icon--submitting', submitting),
            })}
            disabled={submitting}
            icon={IconType.close}
            onClick={close}
          />
        )}
        {typeof header === 'string' ? <h2>{header}</h2> : header}
        {displaySubmitButton && (
          <FormButton
            className={clsx('Modal__default-submit', submitProps.className, {
              ...getCustomClassNames(className, '__default-submit', true),
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
        )}
      </>
    );
  };

  return createPortal(
    <>
      <div
        role="contentinfo"
        className={clsx('Modal__overlay', {
          'Modal__overlay--submitting': submitting,
          ...getCustomClassNames(className, '__overlay', true),
          ...getCustomClassNames(className, '__overlay--submitting', submitting),
        })}
        onClick={submitting || disableOverlayClick ? noop : close}
      />
      <div
        className={clsx(
          'Modal',
          {'Modal--default-position': !style, ...getCustomClassNames(className, '--default-position', !style)},
          className,
        )}
        style={style}
      >
        <div className={clsx('Modal__header', {...getCustomClassNames(className, '__header', true)})}>
          {typeof header === 'string' ? <h2>{header}</h2> : header}
          {displayCloseButton && (
            <Icon
              className={clsx('Modal__close-icon', {
                'Modal__close-icon--submitting': submitting,
                ...getCustomClassNames(className, '__close-icon', true),
                ...getCustomClassNames(className, '__close-icon--submitting', submitting),
              })}
              disabled={submitting}
              icon={IconType.close}
              onClick={close}
            />
          )}
        </div>
        <Form initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <div className={clsx('Modal__header_mobile', {...getCustomClassNames(className, '__header_mobile', true)})}>
            {footer || renderResponsiveHeader()}
          </div>
          <div className={clsx('Modal__content', {...getCustomClassNames(className, '__content', true)})}>
            {children}
          </div>
          <div className={clsx('Modal__footer', {...getCustomClassNames(className, '__footer', true)})}>
            {footer || renderDefaultFooter()}
          </div>
        </Form>
      </div>
    </>,
    document.getElementById('modal-root')!,
  );
};

export default Modal;
