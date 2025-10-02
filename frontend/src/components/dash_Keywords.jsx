import React, { useEffect, useState } from 'react';
import KeywordsGrid from './inner_components/DataGrid';
const DashKeywords = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/keywords/')
      .then((res) => res.json())
      .then((data) => setKeywords(data))
      .catch((err) => console.error('Error fetching keywords:', err));
  }, []);

  return (
    <div>
      <KeywordsGrid keywords={keywords}/>
    </div>
  );
};

export default DashKeywords;
