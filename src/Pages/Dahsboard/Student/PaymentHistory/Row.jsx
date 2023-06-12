
const Row = ({payment, i}) => {
    const {name, email, transactionId, course_id, price, status} = payment
  return (
    <>
      <tr className="odd:bg-base-200 even:bg-base-300 hover:bg-base-100">
        <th>{i + 1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{transactionId}</td>
        <td>{course_id}</td>
        <td>${price}</td>
        <td>{status}</td>
      </tr>
    </>
  );
}

export default Row