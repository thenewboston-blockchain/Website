import React, {FC} from 'react';
import {Link, Router} from 'react-router-dom';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {createMemoryHistory} from 'history';

import Popover, {PopoverProps} from '.';

const history = createMemoryHistory();

const Wrapper: FC = ({children}) => <Router history={history}>{children}</Router>;

const baseProps: PopoverProps = {
  anchorEl: null,
  anchorOrigin: {horizontal: 'center', vertical: 'top'},
  children: (
    <p>
      Popover content <Link to="/different-route">click me</Link>
    </p>
  ),
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

  afterEach(() => jest.clearAllMocks());

  it('renders without crashing', () => {
    render(<Popover {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).toBeTruthy();
  });

  it('renders with default className', () => {
    render(<Popover {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).toHaveClass('Popover');
    expect(screen.getByTestId('Popover')).toHaveClass('Popover--open');
  });

  it('renders with default className--open when open is passed in as true', () => {
    const props = {...baseProps, open: true};
    render(<Popover {...props} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).toHaveClass('Popover--open');
  });

  it('renders with className passed in', () => {
    render(<Popover {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).toHaveClass('Test');
    expect(screen.getByTestId('Popover')).toHaveClass('Test--open');
  });

  it('renders with className--open when open is passed in as true', () => {
    const props = {...baseProps, open: true};
    render(<Popover {...props} />, {wrapper: Wrapper});

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

    await waitFor(() => expect(baseProps.closePopover).toHaveBeenCalledTimes(1));
    screen.getByText('click me').click();
    await waitFor(() => expect(baseProps.closePopover).toHaveBeenCalledTimes(2));
  });

  it('closes popover on scroll', async () => {
    render(<Popover {...baseProps} />, {wrapper: Wrapper});

    // When running multiple tests, the last `expect(...)` gets called more than once.
    // Adding the `jest.resetAllMocks()` to ensure the `closePopover` is called after scroll event.
    await waitFor(() => expect(baseProps.closePopover).toHaveBeenCalledTimes(1));
    jest.resetAllMocks();
    await waitFor(() => expect(baseProps.closePopover).toHaveBeenCalledTimes(0));
    fireEvent(document, new MouseEvent('scroll'));
    await waitFor(() => expect(baseProps.closePopover).toHaveBeenCalled());
  });
});
