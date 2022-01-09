import React, {FC} from 'react';
import {Link, Router} from 'react-router-dom';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {createMemoryHistory} from 'history';

import {ClassName} from 'types/generic';
import Popover, {PopoverProps} from '.';

const history = createMemoryHistory();

const Wrapper: FC = ({children}) => <Router history={history}>{children}</Router>;

const baseProps: PopoverProps & ClassName = {
  anchorEl: null,
  anchorOrigin: {horizontal: 'center', vertical: 'top'},
  className: 'Test',
  closePopover: jest.fn(),
  id: 'test-id',
  open: true,
  transformOffset: {horizontal: 0, vertical: 12},
  transformOrigin: {horizontal: 'center', vertical: 'top'},
};

const TestContent = (
  <p>
    Popover content <Link to="/different-route">click me</Link>
  </p>
);

describe('Popover component', () => {
  beforeAll(() => {
    const portal = document.createElement('div');
    portal.setAttribute('id', 'popover-root');

    document.body.appendChild(portal);
  });

  afterEach(() => jest.clearAllMocks());

  it('renders without crashing', () => {
    render(<Popover {...baseProps}>{TestContent}</Popover>, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).toBeTruthy();
  });

  it('renders with className passed in', () => {
    render(<Popover {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).toHaveClass('Test');
  });

  it('renders with attribute open when open is passed in as true', () => {
    const props = {...baseProps, open: true};
    render(<Popover {...props}>{TestContent}</Popover>, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).toHaveAttribute('open');
    expect(screen.getByTestId('Popover')).toHaveStyle('visibility: visible;');
  });

  it('renders children correctly', () => {
    render(<Popover {...baseProps}>{TestContent}</Popover>, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover').firstChild).toHaveTextContent('Popover content');
  });

  it('renders element with id passed in', () => {
    render(<Popover {...baseProps}>{TestContent}</Popover>, {wrapper: Wrapper});

    expect(screen.getByTestId('Popover')).toHaveAttribute('id', baseProps.id);
  });

  it('closes popover on route change', async () => {
    render(<Popover {...baseProps}>{TestContent}</Popover>, {wrapper: Wrapper});

    await waitFor(() => expect(baseProps.closePopover).toHaveBeenCalledTimes(1));
    screen.getByText('click me').click();
    await waitFor(() => expect(baseProps.closePopover).toHaveBeenCalledTimes(2));
  });

  it('closes popover on scroll', async () => {
    render(<Popover {...baseProps}>{TestContent}</Popover>, {wrapper: Wrapper});

    // When running multiple tests, the last `expect(...)` gets called more than once.
    // Adding the `jest.resetAllMocks()` to ensure the `closePopover` is called after scroll event.
    await waitFor(() => expect(baseProps.closePopover).toHaveBeenCalledTimes(1));
    jest.resetAllMocks();
    await waitFor(() => expect(baseProps.closePopover).toHaveBeenCalledTimes(0));
    fireEvent(document, new MouseEvent('scroll'));
    await waitFor(() => expect(baseProps.closePopover).toHaveBeenCalled());
  });
});
