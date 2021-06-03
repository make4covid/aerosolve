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
   * Number of columns to use in the grid
   */
  columns?: number;
  /**
   * Action to set selected options
   */
  setSelected: (selected: number[]) => void;
  /**
   * Orient card as column?
   */
  cardCol?: boolean;
  /**
   * Data for available options
   */
  options: SelectionOptions[];
}
/**
 * Group of selection cards
 */
export const SelectionGroup: React.FC<SelectionGroupProps> = ({
  multi = true,
  selected = [],
  columns = 2,
  cardCol = false,
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
    <div className={clsx(`grid grid-cols-${columns} gap-6 max-w-5xl`)}>
      {props.options.map((option, index) => (
        <SelectionCard
          {...option}
          selected={selected?.includes(index)}
          onClick={() => {
            toggle(index);
          }}
          column={cardCol}
        ></SelectionCard>
      ))}
    </div>
  );
};
