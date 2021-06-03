import React from 'react';
import {
  SelectionCard,
  SelectionOptions,
} from 'components/SelectionCard/SelectionCard';

import tw from 'twin.macro';

export interface SelectionGroupProps {
  multi?: boolean;
  selected?: number[];
  onSelect: (selected: number[]) => void;
  options: SelectionOptions[];
}
/**
 * Group of selection cards
 */
export const SelectionGroup: React.FC<SelectionGroupProps> = ({
  multi = false,
  selected = [],
  ...props
}) => {
  const toggle = (option: number) => {
    if (!multi) {
      props.onSelect([option]);
      return;
    }

    const selectedSet = new Set(selected);
    if (selectedSet.has(option)) selectedSet.delete(option);
    else selectedSet.add(option);

    props.onSelect(Array.from(selectedSet));
  };
  return (
    <div>
      {props.options.map((option, index) => (
        <SelectionCard
          {...option}
          selected={selected.includes(index)}
          onClick={() => {
            toggle(index);
          }}
        ></SelectionCard>
      ))}
    </div>
  );
};
