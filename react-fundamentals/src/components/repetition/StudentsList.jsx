import React from 'react';

import students from '../../data/students';

export default (props) => {
  const items = students.map(student => {
    return (
      <li key={student.id}>
        {student.id}) {student.name} -{'>'} {student.note}
      </li>
    )
  });

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        { items }
      </ul>
    </div>
  )
};