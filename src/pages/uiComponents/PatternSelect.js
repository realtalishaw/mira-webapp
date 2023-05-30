import React from 'react';
import Select from 'react-select';

const PatternSelect = ({ patterns, selectedPattern, setSelectedPattern }) => {
  const options = patterns.map(pattern => ({
    value: pattern.name,
    label: (
      <div className="flex items-center">
        <img src={pattern.image} alt={pattern.name} width={60} className="mr-2" />
        {pattern.name}
      </div>
    ),
  }));

  const handleChange = (option) => {
    setSelectedPattern(patterns.find(pattern => pattern.name === option.value));
  };

  return (
    <Select
      options={options}
      value={selectedPattern ? { value: selectedPattern.name, label: selectedPattern.name } : null}
      onChange={handleChange}
    />
  );
};

export default PatternSelect;
