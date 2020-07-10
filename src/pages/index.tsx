import React from 'react';
import styles from './index.less';
import moment from 'moment'

console.log(moment.utc())

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
