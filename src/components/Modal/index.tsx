import React, {CSSProperties, ReactNode, useCallback, useEffect, useMemo} from 'react';
import {createPortal} from 'react-dom';
import clsx from 'clsx';
import noop from 'lodash/noop';
import {Icon, IconType} from '@thenewboston/ui';
import {bemify} from '@thenewboston/utils';

import {Form, FormButton, FormButtonProps} from 'components/FormComponents';
import Loader from 'components/FormElements/Loader';
import {GenericFormValues} from 'types/forms';
import {ClassName, GenericFunction, SFC} from 'types/generic';

import * as S from './Styles';

export interface ModalButtonProps extends FormButtonProps, ClassName {
  content: ReactNode;
}

interface ComponentProps {
  cancelButton?: ModalButtonProps | string;
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

const Modal: SFC<ComponentProps> = ({
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
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

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
        <S.DefaultCancel
          className={clsx({
            ...bemify(className, '__default-cancel'),
          })}
        >
          <FormButton
            className={cancelProps.className}
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
        </S.DefaultCancel>
        <S.DefaultSubmit
          className={clsx({
            ...bemify(className, '__default-submit'),
          })}
        >
          <FormButton
            className={submitProps.className}
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
        </S.DefaultSubmit>
      </>
    );
  };

  const renderResponsiveHeader = (): ReactNode => {
    return (
      <>
        <S.CloseIcon
          className={clsx({
            ...bemify(className, '__close-icon'),
            ...bemify(className, '__close-icon--submitting', submitting),
          })}
        >
          <Icon disabled={submitting} icon={IconType.close} onClick={close} />
        </S.CloseIcon>
        {typeof header === 'string' ? <S.H2>{header}</S.H2> : header}
        <S.DefaultSubmit
          className={clsx({
            ...bemify(className, '__default-submit'),
          })}
        >
          <FormButton
            className={submitProps.className}
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
        </S.DefaultSubmit>
      </>
    );
  };

  return createPortal(
    <>
      <S.Overlay
        role="contentinfo"
        submitting={submitting}
        className={clsx({
          ...bemify(className, '__overlay'),
          ...bemify(className, '__overlay--submitting', submitting),
        })}
        onClick={submitting ? noop : close}
      />
      <S.Modal defaultPosition={!style} style={style}>
        <S.Header className={clsx({...bemify(className, '__header')})}>
          {typeof header === 'string' ? <S.H2>{header}</S.H2> : header}
          <S.CloseIcon
            className={clsx({
              ...bemify(className, '__close-icon'),
              ...bemify(className, '__close-icon--submitting', submitting),
            })}
            submitting={submitting}
          >
            <Icon disabled={submitting} icon={IconType.close} onClick={close} />
          </S.CloseIcon>
        </S.Header>
        <Form initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {() => (
            <>
              <S.HeaderMobile className={clsx({...bemify(className, '__header_mobile')})}>
                {footer || renderResponsiveHeader()}
              </S.HeaderMobile>
              <S.Content className={clsx({...bemify(className, '__content')})}>{children}</S.Content>
              <S.Footer className={clsx({...bemify(className, '__footer')})}>
                {footer || renderDefaultFooter()}
              </S.Footer>
            </>
          )}
        </Form>
      </S.Modal>
    </>,
    document.getElementById('modal-root')!,
  );
};

export default Modal;
