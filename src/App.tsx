import React from 'react';
import './App.css';
import Display from './components/Display/Display';

function App() {
  const formatValue = (val: number | string) => {
    const s = String(val);
    if (!s.includes('.')) {
      return `${s}.`;
    }
    return s;
  };

  return (
    <div className="App">
      {/* Примеры отображения */}
      <Display value={formatValue(123)} />
      <Display value={formatValue('123.45')} />
      <Display value={formatValue(0)} />
      {/* ... другие компоненты появятся здесь позже */}
    </div>
  );
}

export default App;
