import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEntries } from '../context/PlannerContext';
import { useForm } from '../hooks/useForm';

import styles from './Entry.css';

export default function Entry() {
  const { id } = useParams();
  const [entry, setEntry] = useState({});
  const { entries, getEntry, addEntry } = useEntries();
  const [edit, setEdit] = useState(false);
  // const { formState, formError, handleFormChange, setFormError } = useForm({
  //   title: '',
  //   content: '',
  // });

  useEffect(() => {
    setEntry(getEntry(id));
  }, [id, entries.length]);

  // const handleEdit = (e) => {
  //   e.preventDefault();
  //   setFormError('');
  //   if (!formState.title) return setFormError('Title is required');
  //   if (!formState.date) return setFormError('Date is required');
  //   addEntry(formState);
  //   setEdit(false);
  // };

  return (
    <>
      <Link to="/entries" className={styles.backButton}>
        &laquo; Back to Planner
      </Link>
      {/* {!edit ? ( */}
      {/* <> */}
      <article className={styles.entry}>
        <h1>{entry?.title}</h1>
        <p>Due: {entry?.date}</p>
        <p>{entry?.content}</p>
      </article>
      {/* <button onClick={() => setEdit(true)}>Edit</button> */}
      {/* </> */}
      {/* ) : (
        <>
          <form onSubmit={handleEdit} className={styles.entry}>
            <input
              type="text"
              name="title"
              placeholder="Plan something"
              value={formState.title}
              onChange={handleFormChange}
              className={styles.input}
            />
            <input
              type="date"
              name="date"
              aria-label="Due date"
              value={formState.date}
              onChange={handleFormChange}
              className={styles.input}
            />
            <textarea
              name="content"
              placeholder="A brief description of what you're planning"
              value={formState.content}
              onChange={handleFormChange}
              className={styles.content}
            />
          </form>
          <button onClick={handleEdit}>Save</button> */}
      {/* </> */}
      {/* )} */}
    </>
  );
}
