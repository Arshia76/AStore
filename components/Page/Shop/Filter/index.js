import Checkbox from '../../../Shared/Checkbox';
import styles from './Filter.module.css';
import { AiTwotoneMinusSquare } from 'react-icons/ai';

const Filter = (props) => {
  const onCheckChangeCategory = (value, event) => {
    if (value) {
      props.setCategoryFilter((data) => [...data, event.target.textContent]);
    } else {
      props.setCategoryFilter((data) =>
        data.filter((d) => d !== event.target.textContent)
      );
    }
  };

  return (
    <div className={styles.Filter}>
      <h4>CATEGORIES</h4>
      <div className={styles.Categories}>
        {props.categories.map((c, index) => {
          return (
            <Checkbox
              onChange={onCheckChangeCategory}
              key={index}
              value={c}
              label={c}
              className='Filter'
              labelClassName='Filter'
              containerClassName='Filter'
              borderColor='#6D6D6D'
              borderRadius='3px'
              icon={<AiTwotoneMinusSquare size={10} color='#BD744C' />}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
