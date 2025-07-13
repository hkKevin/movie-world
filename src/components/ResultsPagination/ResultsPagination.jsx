import React from 'react';
// import Pagination from 'rc-pagination';

import './ResultsPagination.css'

const resultsPagination = (props) => {

  const itemRender = (current, type, element) => {
    if (type === 'prev') {
      return '<';
    }
    if (type === 'next') {
      return '>';
    }
    return element;
  };

  return (
    <></>
    // <Pagination
    //   onChange={props.onChange}
    //   current={props.currentPage}
    //   total={props.totalPages > 1000 ? 1000 : props.totalPages}
    //   pageSize={1}
    //   itemRender={itemRender}
    //   showTitle={false}
    //   showLessItems={true}
    //   showPrevNextJumpers={false} />
  );
}

export default resultsPagination;