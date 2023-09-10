import { LoadingScreen } from '@/components/loading';
import { useData } from '@/services/UseAxios';
import Home from '@/views/home';
import { useEffect } from 'react';

const Index = () => {
  const url = 'https://resourses.site/cesaramirezabogados/dataSite.json'; // URL del JSON

  const { data, isLoading, error } = useData(url);
  useEffect(() => {
  
  }, [data, isLoading, error]);

  if (isLoading) {
    return <LoadingScreen/>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Home data={data} />
    );
}

export default Index;