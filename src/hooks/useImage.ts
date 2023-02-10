import {useEffect, useState} from 'react';

export enum ImagePath {
  ConditionIcons = './../components/icons/weather-conditions/img/',
}

export const useImage = (fileName: string, filepath: ImagePath) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        if (filepath === ImagePath.ConditionIcons) {
          const response = await import(`./../components/icons/weather-conditions/img/${fileName}`);
          setImage(response.default);
        }
      } catch (err) {
        console.error(err);
        throw new Error('Error in useImage hook.');
      } finally {
        setLoading(false);
      }
    };

    // tslint:disable-next-line: no-floating-promises
    fetchImage();
  }, [fileName]);

  return {
    loading,
    image,
  };
};
