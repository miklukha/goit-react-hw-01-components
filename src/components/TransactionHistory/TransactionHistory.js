import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export function TransactionHistory({ transactions }) {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr className={s.row}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.body}>
        {transactions.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};
