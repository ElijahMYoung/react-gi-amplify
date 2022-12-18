export default function Person({ id, name, phone, email }) {
  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Phone: {phone}</li>
        <li>Email: {email}</li>
      </ul>
    </div>
  );
}
