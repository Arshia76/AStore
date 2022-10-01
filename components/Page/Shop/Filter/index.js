import { useState } from 'react';
import styles from './Filter.module.css';
import Resource from '../../../../public/Resource';
import Image from 'next/image';

const Filter = (props) => {
  const [indexes, setIndexes] = useState([]);

  const handleCategory = (index, c) => {
    if (indexes.includes(index)) {
      setIndexes((indexes) => indexes.filter((i) => i !== index));
      props.setCategoryFilter((data) => data.filter((d) => d !== c));
    } else {
      setIndexes((data) => [...data, index]);
      props.setCategoryFilter((data) => [...data, c]);
    }
  };

  return (
    <div className={styles.Filter}>
      <div className={styles.Categories}>
        {props.categories.map((c, index) => {
          return (
            <div
              style={{
                border: `1px solid ${
                  indexes.includes(index) ? '#ddd' : 'transparent'
                }`,
              }}
              key={index}
              className={styles.Category}
              onClick={() => handleCategory(index, c)}
            >
              <Image
                objectFit='contain'
                src={
                  index === 0
                    ? Resource.Images.ELECTRONICS
                    : index === 1
                    ? Resource.Images.JEWELERY
                    : index === 2
                    ? Resource.Images.MEN_CLOTHING
                    : Resource.Images.WOMEN_CLOTHING
                }
                alt={c}
                width={50}
                height={80}
              />
              <h4>{c}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
