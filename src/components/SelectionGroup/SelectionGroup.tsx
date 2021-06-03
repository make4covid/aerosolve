import React from 'react';
import {
  SelectionCard,
  SelectionOptions,
} from 'components/SelectionCard/SelectionCard';

import clsx from 'clsx';

export interface SelectionGroupProps {
  /**
   * Allow multiple selection?
   */
  multi?: boolean;
  /**
   * Array of selected options
   */
  selected?: number[];
  /**
   * Action to set
   */
  setSelected: (selected: number[]) => void;
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
      props.setSelected([option]);
      return;
    }

    const selectedSet = new Set(selected);
    if (selectedSet.has(option)) selectedSet.delete(option);
    else selectedSet.add(option);
    props.setSelected(Array.from(selectedSet));
  };

  return (
    <div className={clsx('grid grid-cols-2 gap-6 max-w-5xl')}>
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
