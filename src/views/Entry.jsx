import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEntries } from '../context/PlannerContext';

import styles from './Entry.css';

export default function Entry() {
  const { id } = useParams();
  const [entry, setEntry] = useState({});
  const { entries, getEntry } = useEntries();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setEntry(getEntry(id));
  }, [id, entries.length]);

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <>
      <Link to="/entries" className={styles.backButton}>
        &laquo; Back to Planner
      </Link>
      {!edit ? (
        <>
          <article className={styles.entry}>
            <h1>{entry?.title}</h1>
            <p>Due: {entry?.date}</p>
            <p>{entry?.content}</p>
          </article>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      ) : (
        <>
          <article className={styles.entry}>
            <input type='text' value={entry.title} onChange={} />
            <p>Due: {entry?.date}</p>
            <p>{entry?.content}</p>
          </article>
          <button onClick={handleEdit}>Save</button>
        </>
      )}
    </>
  );
}
