import React from 'react';
import {Option} from 'components/controls/Option';
import {StyledOption} from './style';

interface Props {
  option: Option;
  index: number;
  className?: string;
  setHighlightedItem: ({
    index,
  }: {
    index?: number | undefined;
    event?: React.KeyboardEvent<HTMLInputElement> | undefined;
  }) => void;
  onClick: (option: Option) => void;
}

export const OptionItem = (props: Props) => {
  const {index, option, className, setHighlightedItem, onClick} = props;

  const handleMouseEnter = () => {
    setHighlightedItem({index});
  };

  const handleClick = () => {
    onClick(option);
  };

  return (
    <StyledOption className={className} onMouseEnter={handleMouseEnter} key={`option-${index}`} onClick={handleClick}>
      <div className="ellipsis" title={option.label}>
        {option.label}
      </div>
    </StyledOption>
  );
};
