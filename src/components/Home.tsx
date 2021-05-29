import React, { useEffect, useState } from 'react';
import { fetchQuizCategories } from '../services/api';
import Select, { ValueType, ActionMeta } from 'react-select';

// Styles
import { OptionsWrapper, Wrapper } from './Home.styles';

// Types
type Props = {
  onStart: () => void;
  selectedOption: Option | null;
  onChange: (value: ValueType<Option, false>, meta: ActionMeta<Option>) => void;
};

export type Category = {
  id: number;
  name: string;
};

export type Option = {
  label: string;
  value: number;
};

const Home: React.FC<Props> = ({ onStart, selectedOption, onChange }) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const newCategories = await fetchQuizCategories();

      setOptions(
        newCategories.map((category: Category) => ({
          value: category.id,
          label: category.name,
        })),
      );
    };

    fetch();
  }, []);

  return (
    <Wrapper>
      <h1 className="title-primary">
        REACT <br /> <span className="title-secondary">QUIZ GAME</span>
      </h1>

      <OptionsWrapper>
        <Select className="select" value={selectedOption} onChange={onChange} options={options} placeholder="Select a category" />

        <button className="start" onClick={onStart}>
          Start
        </button>
      </OptionsWrapper>
    </Wrapper>
  );
};

export default Home;
