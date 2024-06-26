import './TransactionHistory.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <>
      {items.map(item => (
        <tr className="table-tr" key={item.id}>
          <td className="table-td">{item.type}</td>
          <td className="table-td">{item.amount}</td>
          <td className="table-td">{item.currency}</td>
        </tr>
      ))}
    </>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
