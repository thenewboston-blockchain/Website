import React, {FC} from 'react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from 'recharts';

import {AnalyticsData} from 'types/analytics';
import './AnalyticsGraph.scss';

interface AnalyticsGraphProps {
  data: AnalyticsData[];
  title: string;
}

const styledTick = {fill: '#4f566b', fontSize: 9};

const AnalyticsGraph: FC<AnalyticsGraphProps> = ({data, title}) => {
  const formatDate = (date: string | number) => {
    if (date === 'auto' || typeof date === 'number') return '';

    return date.toString().length ? format(parseISO(date), 'MMM dd') : '';
  };

  return (
    <div className="AnalyticsGraph">
      <span className="AnalyticsGraph__title">{title}</span>
      {/* width can't be 100% due to some responsive bug */}
      {/* https://stackoverflow.com/questions/50891591/recharts-responsive-container-does-not-resize-correctly-in-flexbox */}
      <ResponsiveContainer width="99%" height={225}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={styledTick} tickFormatter={formatDate} tickMargin={5} />
          <YAxis tick={styledTick} tickMargin={5} />
          <Line type="monotone" dataKey="value" stroke="#7dabf8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsGraph;
