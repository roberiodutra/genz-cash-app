import { Dispatch, SetStateAction, MouseEvent } from 'react';

type DataProps = {
  setFilterType: Dispatch<SetStateAction<string>>;
};

type EventTargetElement = {
  target: MouseEvent<HTMLButtonElement, MouseEvent>;
};

export default function TransactionsFilter({ setFilterType }: DataProps) {
  const handleToggle = (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    setFilterType(target.name);
  };

  return (
    <div className="filter-actions">
      <button name="debts" type="button" onClick={handleToggle}>
        Debts
      </button>
      <button name="credits" type="button" onClick={handleToggle}>
        Credits
      </button>
    </div>
  );
}
