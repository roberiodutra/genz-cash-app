import { MouseEvent } from 'react';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { setFilterType } from '../../store/userActions/actionsSlice';

export default function TransactionsFilter() {
  const dispatch = useAppDispatch();

  const handleToggle = (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    dispatch(setFilterType(target.name));
  };

  return (
    <div className="filter-actions">
      <button name="all" type="button" onClick={handleToggle}>
        All
      </button>
      <button name="debts" type="button" onClick={handleToggle}>
        Debts
      </button>
      <button name="credits" type="button" onClick={handleToggle}>
        Credits
      </button>
    </div>
  );
}
