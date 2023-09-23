export function Contact(props) {
  return (
    <li>
      {props.name}: {props.number}{' '}
      <button type="button" onClick={() => props.onClick(props.id)}>
        Delete
      </button>
    </li>
  );
}
