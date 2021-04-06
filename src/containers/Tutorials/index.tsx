import {getCategories} from 'apis/tutorials';
import React, {FC, useEffect, useState} from 'react';

import './Tutorials.scss';

const Tutorials: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    //   testing out api
    const fetchData = async (): Promise<void> => {
      try {
        const categories = await getCategories();
        console.log(categories);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return <div className="Tutorials">Tutorials</div>;
};

export default Tutorials;
