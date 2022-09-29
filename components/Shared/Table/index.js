import styles from './Table.module.css';
import PropTypes from 'prop-types';

const Table = (props) => {
  const { headers, data } = props;
  const tableClasses = [styles.Table];
  console.log(data);
  if (props.className) tableClasses.push(styles[props.className]);
  return (
    <table className={tableClasses.join(' ')}>
      <thead className={styles.Header}>
        <tr>
          {Object.keys(headers).map((header) => {
            return (
              <th scope='col' key={header}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className={styles.Body}>
        {data &&
          data.map((datum, index) => {
            return (
              <tr key={index}>
                {Object.keys(headers).map((header, index) => {
                  console.log(datum[header]);
                  return <td key={index}>{datum[header]}</td>;
                })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  headers: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
