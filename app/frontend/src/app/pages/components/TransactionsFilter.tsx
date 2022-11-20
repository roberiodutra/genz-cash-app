import { MouseEvent } from 'react';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { setFilterType } from '../../store/userActions/actionsSlice';

export default function TransactionsFilter() {
  const dispatch = useAppDispatch();

  const handleToggle = (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    dispatch(setFilterType(target.value));
  };

  return (
    <div className="filter-actions">
      <span>filter by:</span>
      <label htmlFor="all" className="dot">
        <input
          type="radio"
          id="all"
          name="filter-actions"
          value="all"
          onClick={handleToggle}
          defaultChecked
        />
        <div className="all box">
          <span>all</span>
        </div>
      </label>
      <label htmlFor="debts" className="dot">
        <input
          type="radio"
          id="debts"
          name="filter-actions"
          value="debts"
          onClick={handleToggle}
        />
        <div className="debts box">
          <span>debts</span>
        </div>
      </label>
      <label htmlFor="credits" className="dot">
        <input
          type="radio"
          id="credits"
          name="filter-actions"
          value="credits"
          onClick={handleToggle}
        />
        <div className="credits box">
          <span>credits</span>
        </div>
      </label>
    </div>
  );
}
