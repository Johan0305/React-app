export const Note = ({ id, content, date }) => {
  return (
    <li>
      <p>{content}</p>
      <p>
        <small>
          <time>{date}</time>
        </small>
      </p>
    </li>
  );
};
