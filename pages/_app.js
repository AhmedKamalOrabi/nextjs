import { useState } from 'react';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  const [config, setConfig] = useState({
    language: 'Arabic',
    direction: 'rtl',
  });

  const updateConfig = (configParam) => {
    setConfig((preConfig) => ({ ...preConfig, ...configParam, newLanguage }));
  };
  return (
    <Component {...pageProps} config={config} updateConfig={updateConfig} />
  );
}
