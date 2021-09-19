import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {ClassName} from 'types/generic';
import ContributorBounties, {ContributorBountiesProps} from '.';

const props: ContributorBountiesProps & ClassName = {
  bounties: [
    {
      amount_paid: '2800',
      completed_by: 'contributor 1',
      completed_date: new Date('2021/02/20'),
      issue_id: '111',
      pr_id: '222',
      repository: 'Kotlin-SDK',
      title: 'Software engineer',
    },
    {
      amount_paid: '2800',
      completed_by: 'contributor 2',
      completed_date: new Date('2021/02/24'),
      issue_id: '333',
      pr_id: '444',
      repository: 'Website',
      title: 'Front End Developer',
    },
  ],
  className: 'test',
};

const testIdBounty = 'ContributorBounties';
const testIdRow = 'ContributorBounties__row';
const testIdTitle = 'ContributorBounties__bounty-title';
const testIdLink = 'A';
const testIdRepo = 'ContributorBounties__repository';
const testIdDate = 'ContributorBounties__date-completed';
const testIdAmount = 'ContributorBounties__amount';

describe('ContributorBounties', () => {
  it('renders without crashing', () => {
    render(<ContributorBounties {...props} />);

    expect(screen.getByTestId(testIdBounty)).toBeTruthy();
  });

  it('renders all bounties', () => {
    render(<ContributorBounties {...props} />);
    const bounties = screen.getAllByTestId(testIdRow);

    expect(bounties.length).toBe(2);
  });

  it('renders with passed in className', () => {
    render(<ContributorBounties {...props} />);
    const bountyComp = screen.getByTestId(testIdBounty);

    expect(bountyComp).toHaveClass('test');
  });

  it('renders rows with title', () => {
    render(<ContributorBounties {...props} />);
    const bounties = screen.getAllByTestId(testIdTitle);

    expect(bounties[0]).toHaveTextContent('Software engineer');
    expect(bounties[1]).toHaveTextContent('Front End Developer');
  });

  it('renders rows with valid github issue link', () => {
    render(<ContributorBounties {...props} />);
    const bounties = screen.getAllByTestId(testIdLink);

    const validHref = bounties.every((bounty, i) => {
      const propBounty = props.bounties[i];
      const href = `https://github.com/thenewboston-developers/${propBounty.repository}/issues/${propBounty.issue_id}`;

      return bounty.getAttribute('href') === href;
    });

    expect(validHref).toBeTruthy();
  });

  it('renders rows with valid github repository repository', () => {
    render(<ContributorBounties {...props} />);
    const bounties = screen.getAllByTestId(testIdRepo);

    expect(bounties[0]).toHaveTextContent('Kotlin-SDK');
    expect(bounties[1]).toHaveTextContent('Website');
  });

  it('renders rows with date completed', () => {
    render(<ContributorBounties {...props} />);
    const bounties = screen.getAllByTestId(testIdDate);

    expect(bounties[0]).toHaveTextContent('2/20/21');
    expect(bounties[1]).toHaveTextContent('2/24/21');
  });

  it('renders rows with valid amount', () => {
    render(<ContributorBounties {...props} />);
    const bounties = screen.getAllByTestId(testIdAmount);

    expect(bounties[0]).toHaveTextContent('+ 2,800');
    expect(bounties[1]).toHaveTextContent('+ 2,800');
  });
});
