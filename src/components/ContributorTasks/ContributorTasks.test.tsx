import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ContributorTasks, {ContributorTasksProps} from '.';

const props: ContributorTasksProps = {
  className: 'test',
  tasks: [
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
};

const testIdTask = 'ContributorTasks';
const testIdRow = 'ContributorTasks__row';
const testIdTitle = 'ContributorTasks__task-title';
const testIdLink = 'A';
const testIdRepo = 'ContributorTasks__repository';
const testIdDate = 'ContributorTasks__date-completed';
const testIdAmount = 'ContributorTasks__amount';

describe('ContributorTasks', () => {
  it('renders without crashing', () => {
    render(<ContributorTasks {...props} />);

    expect(screen.getByTestId(testIdTask)).toBeTruthy();
  });

  it('renders all tasks', () => {
    render(<ContributorTasks {...props} />);
    const tasks = screen.getAllByTestId(testIdRow);

    expect(tasks.length).toBe(2);
  });

  it('renders with default className', () => {
    render(<ContributorTasks {...props} />);
    const taskComp = screen.getByTestId(testIdTask);
    const taskTitle = screen.getAllByTestId(testIdTitle);
    const issueLink = screen.getAllByTestId(testIdLink);
    const repo = screen.getAllByTestId(testIdRepo);
    const dateCompleted = screen.getAllByTestId(testIdDate);
    const amount = screen.getAllByTestId(testIdAmount);

    expect(taskComp).toHaveClass(testIdTask);

    expect(taskTitle[0]).toHaveClass(testIdTitle);
    expect(taskTitle[1]).toHaveClass(testIdTitle);

    expect(issueLink[0]).toHaveClass('ContributorTasks__issue-link');
    expect(issueLink[1]).toHaveClass('ContributorTasks__issue-link');

    expect(repo[0]).toHaveClass(testIdRepo);
    expect(repo[1]).toHaveClass(testIdRepo);

    expect(dateCompleted[0]).toHaveClass(testIdDate);
    expect(dateCompleted[1]).toHaveClass(testIdDate);

    expect(amount[0]).toHaveClass(testIdAmount);
    expect(amount[1]).toHaveClass(testIdAmount);
  });

  it('renders with passed in className', () => {
    render(<ContributorTasks {...props} />);
    const taskComp = screen.getByTestId(testIdTask);

    expect(taskComp).toHaveClass('test');
  });

  it('renders rows with title', () => {
    render(<ContributorTasks {...props} />);
    const tasks = screen.getAllByTestId(testIdTitle);

    expect(tasks[0]).toHaveTextContent('Software engineer');
    expect(tasks[1]).toHaveTextContent('Front End Developer');
  });

  it('renders rows with valid github issue link', () => {
    render(<ContributorTasks {...props} />);
    const tasks = screen.getAllByTestId(testIdLink);

    const validHref = tasks.every((task, i) => {
      const propTask = props.tasks[i];
      const href = `https://github.com/thenewboston-developers/${propTask.repository}/issues/${propTask.issue_id}`;

      return task.getAttribute('href') === href;
    });

    expect(validHref).toBeTruthy();
  });

  it('renders rows with valid github repository repository', () => {
    render(<ContributorTasks {...props} />);
    const tasks = screen.getAllByTestId(testIdRepo);

    expect(tasks[0]).toHaveTextContent('Kotlin-SDK');
    expect(tasks[1]).toHaveTextContent('Website');
  });

  it('renders rows with date completed', () => {
    render(<ContributorTasks {...props} />);
    const tasks = screen.getAllByTestId(testIdDate);

    expect(tasks[0]).toHaveTextContent('2/20/21');
    expect(tasks[1]).toHaveTextContent('2/24/21');
  });

  it('renders rows with valid amount', () => {
    render(<ContributorTasks {...props} />);
    const tasks = screen.getAllByTestId(testIdAmount);

    expect(tasks[0]).toHaveTextContent('+ 2,800');
    expect(tasks[1]).toHaveTextContent('+ 2,800');
  });
});
