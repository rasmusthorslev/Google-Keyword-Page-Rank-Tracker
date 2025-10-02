import React, { useEffect, useState } from 'react';
import KeywordsGrid from './inner_components/DataGrid';

const DashKeywords = () => {
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = localStorage.getItem('username');

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      fetch('http://localhost:8000/api/rankresults/')
        .then(res => res.json())
        .then(data => {
          const filtered = data.filter(rankresult => {
            const matchingClient = rankresult.keyword.clients.find(c => c.id === rankresult.client);
            return matchingClient && matchingClient.name === localStorage.getItem('username');
          });
          const mapped = filtered.map(result => ({
            id: result.id,
            name: result.keyword.name,
            rank: result.position,
          }));
          setKeywords(mapped);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    };

    fetchData();

    const handler = () => fetchData();
    window.addEventListener('usernameChanged', handler);

    return () => window.removeEventListener('usernameChanged', handler);
  }, []);


  return (
    <div>
      <KeywordsGrid keywords={keywords} loading={loading} />
    </div>
  );
};

export default DashKeywords;
