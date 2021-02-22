/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import format from 'date-fns/format';

import ContributorTasks, {ContributorTasksProps} from './index';

describe('ContributorTasks', () => {
  let props: ContributorTasksProps;

  beforeEach(() => {
    props = {
      className: 'test',
      tasks: [
        {
          amount_paid: '2800',
          completed_by: 'contributor 1',
          completed_date: new Date(Date.now()),
          issue_id: '111',
          pr_id: '222',
          repository: 'Kotlin-SDK',
          title: 'Sofware engineer',
        },
        {
          amount_paid: '2800',

          completed_by: 'contributor 2',
          completed_date: new Date(Date.now()),
          issue_id: '333',
          pr_id: '444',
          repository: 'Website',
          title: 'Front End Developer',
        },
      ],
    };
  });

  it('renders without crashing', () => {
    render(<ContributorTasks {...props} />);

    expect(screen.getByTestId('ContributorTasks')).toBeTruthy();
  });

  it('renders with default className', () => {
    render(<ContributorTasks {...props} />);
    const taskComp = screen.getByTestId('ContributorTasks');

    expect(taskComp).toHaveClass('ContributorTasks');
  });

  it('renders with passed in className', () => {
    render(<ContributorTasks {...props} />);
    const taskComp = screen.getByTestId('ContributorTasks');

    expect(taskComp).toHaveClass('test');
  });

  it('renders all tasks', () => {
    render(<ContributorTasks {...props} />);
    const tasks = screen.getAllByTestId('ContributorTasks--row');

    expect(tasks.length).toBe(props.tasks.length);
  });

  it('renders rows with title', () => {
    render(<ContributorTasks {...props} />);
    const tasks = screen.getAllByTestId('ContributorTasks__task-title');

    const validTitle = tasks.every((task, i) => task.textContent === props.tasks[i].title);

    expect(validTitle).toBeTruthy();
  });

  it('renders rows with valid github issue link', () => {
    render(<ContributorTasks {...props} />);
    const tasks = screen.getAllByTestId('A');

    const validClass = tasks.every((task) => {
      return task.className.includes('ContributorTasks__issue-link');
    });

    const validHref = tasks.every((task, i) => {
      const propTask = props.tasks[i];
      const href = `https://github.com/thenewboston-developers/${propTask.repository}/issues/${propTask.issue_id}`;

      return task.getAttribute('href') === href;
    });

    expect(validClass).toBeTruthy();
    expect(validHref).toBeTruthy();
  });

  it('renders rows with valid github repository repository', () => {
    render(<ContributorTasks {...props} />);
    const tasks = screen.getAllByTestId('ContributorTasks__repository');

    const validRepo = tasks.every((task, i) => {
      return task.textContent === props.tasks[i].repository;
    });

    expect(validRepo).toBeTruthy();
  });

  it('renders rows with date compeleted', () => {
    render(<ContributorTasks {...props} />);
    const tasks = screen.getAllByTestId('ContributorTasks__date-completed');

    const validDate = tasks.every((task, i) => {
      const date = format(props.tasks[i].completed_date, 'L/d/yy');
      return task.textContent === date;
    });

    expect(validDate).toBeTruthy();
  });

  it('renders rows with valid amount', () => {
    render(<ContributorTasks {...props} />);
    const tasks = screen.getAllByTestId('ContributorTasks__amount');

    const validAmount = tasks.every((task, i) => {
      const amount = props.tasks[i].amount_paid;
      const formattedAmount = parseInt(amount, 10).toLocaleString();
      return task.textContent === `+ ${formattedAmount}`;
    });

    expect(validAmount).toBeTruthy();
  });
});
