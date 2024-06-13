interface fetchDataProps {
    path: string,
}
export const fetchData = async ({path}:fetchDataProps): Promise<any[]> => {
    const url = `https://jsonplaceholder.typicode.com${path}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  