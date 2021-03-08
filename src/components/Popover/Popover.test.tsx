import React, {FC} from 'react';
import {Router} from 'react-router-dom';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {createMemoryHistory} from 'history';

import Popover, {PopoverProps} from '.';

const history = createMemoryHistory();

const Wrapper: FC = ({children}) => {
  return (
    <Router history={history}>
      <button id="anchor">Anchor</button>
      {children}
    </Router>
  );
};

const baseProps: PopoverProps = {
  anchorEl: null,
  anchorOrigin: {horizontal: 'center', vertical: 'top'},
  children: <p>Popover content</p>,
  className: 'Test',
  closePopover: jest.fn(),
  id: 'test-id',
  open: true,
  transformOffset: {horizontal: 0, vertical: 12},
  transformOrigin: {horizontal: 'center', vertical: 'top'},
};

describe('Popover component', () => {
  beforeAll(() => {
    const portal = document.createElement('div');
    portal.setAttribute('id', 'popover-root');

    document.body.appendChild(portal);
  });

  afterEach(() => jest.resetAllMocks());

  it('renders without crashing', () => {
    render(<Popover {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).toBeTruthy();
  });

  it('renders with default className', () => {
    render(<Popover {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).toHaveClass('Popover');
  });

  it('renders with default className--open when open is passed in as true', () => {
    render(<Popover {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).toHaveClass('Popover--open');
  });

  it('renders with className passed in', () => {
    render(<Popover {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).toHaveClass('Test');
  });

  it('renders with className--open when open is passed in as true', () => {
    render(<Popover {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).toHaveClass('Test--open');
  });

  it('renders children correctly', () => {
    render(<Popover {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover').firstChild).toHaveTextContent('Popover content');
  });

  it('renders element with id passed in', () => {
    render(<Popover {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).toHaveAttribute('id', baseProps.id);
  });

  it('closes popover on route change', async () => {
    render(<Popover {...baseProps} />, {wrapper: Wrapper});

    expect(baseProps.closePopover).toHaveBeenCalledTimes(1);
    history.push('/different-route');
    await waitFor(() => expect(baseProps.closePopover).toHaveBeenCalledTimes(2));
  });

  it('closes popover on scroll', async () => {
    render(<Popover {...baseProps} />, {wrapper: Wrapper});

    expect(baseProps.closePopover).toHaveBeenCalledTimes(1);
    fireEvent(document, new MouseEvent('scroll'));
    await waitFor(() => expect(baseProps.closePopover).toHaveBeenCalledTimes(10));
  });

  it('opens popover when clicked on anchor element', async () => {
    const anchorEl = document.getElementById('anchor')!;
    const props = {...baseProps, anchorEl, open: false};
    render(<Popover {...props} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).not.toHaveClass('Popover--open');
    //  fireEvent(anchorEl, new MouseEvent('click'));
    //  await waitFor(() => expect(screen.getByTestId('Popover')).toHaveClass('Popover--open'));
  });
});
