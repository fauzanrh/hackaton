import { createContext, useEffect, useState } from 'react';

import { notification } from 'antd';
import PropTypes from 'prop-types';

import LanguageAPI from 'api/language';

export const LanguageStore = createContext();

export function LanguageStoreProvider({ defaultLanguage = 'en', children }) {
  const [language, setLanguage] = useState(defaultLanguage);
  const [languageCollection, setLanguageCollection] = useState({});
  const [loading, setLoading] = useState(false);

  async function getLanguageFromAPI(languageSelected = '') {
    try {
      setLoading(true);
      const { data } = await LanguageAPI.getLanguage(languageSelected);
      setLanguageCollection(data);
    } catch (error) {
      notification.open({
        message: 'Error Occured',
        description: 'Failed to fetch the language to the system',
      });
    } finally {
      setLoading(false);
    }
  }

  function changeLanguage(lang) {
    setLanguage(lang);
    getLanguageFromAPI(lang);
  }

  useEffect(() => {
    getLanguageFromAPI();
  }, []);

  return (
    <LanguageStore.Provider
      value={{
        changeLanguage,
        language,
        languageCollection,
        loading,
      }}>
      {children}
    </LanguageStore.Provider>
  );
}

LanguageStoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
