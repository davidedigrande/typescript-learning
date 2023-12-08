import React, { useState, useEffect } from 'react';
import CardExperienceList from './CardExperienceList'

interface CardExperienceListProviderProps {
  type: string
}

const CardExperienceListProvider: React.FC<CardExperienceListProviderProps> = ({ type }) => {
  const [data, setData] = useState([])
  let url = `${process.env.REACT_APP_BACKEND_URL}/experience?type=${type}`
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
  }, [type])
  return <CardExperienceList data={data} />
}

export default CardExperienceListProvider;