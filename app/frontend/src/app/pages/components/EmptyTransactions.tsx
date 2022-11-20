import moment from 'moment';

export default function EmptyTransactions() {
  return (
    <tbody>
      <tr>
        <td>@transactions will be here</td>
        <td>$0.00</td>
        <td>{moment(Date.now()).format('MMM Do YY')}</td>
      </tr>
    </tbody>
  );
}
