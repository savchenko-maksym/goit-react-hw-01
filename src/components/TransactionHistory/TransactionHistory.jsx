import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr className={s.tableHeadList}>
          <th className={s.tableHeadItem}>Type</th>
          <th className={s.tableHeadItem}>Amount</th>
          <th className={s.tableHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tableBody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={s.tableBodyList}>
              <td className={s.tableBodyItem}>{type}</td>
              <td className={s.tableBodyItem}>{amount}</td>
              <td className={s.tableBodyItem}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
