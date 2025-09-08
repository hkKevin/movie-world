import React from "react";
import Pagination from "rc-pagination";
import { Tooltip } from "react-tooltip";

import "./ResultsPagination.css";

const resultsPagination = (props) => {
  const itemRender = (current, type, element) => {
    if (type === "prev") {
      return "<";
      // return <svg xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 640 640"><path fill="#efe1b1" d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z"/></svg>;
    }
    if (type === "next") {
      return ">";
      // return <svg xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 640 640"><path fill="#efe1b1" d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg>;
    }
    return element;
  };

  return (
    <>
      <Tooltip id="prev-page-tooltip" anchorSelect=".rc-pagination-prev" className="tooltip" place="left" variant='light'>
        Previous Page
      </Tooltip>
      
      <Tooltip id="prev-page-tooltip" anchorSelect=".rc-pagination-next" className="tooltip" place="right" variant='light'>
        Next Page
      </Tooltip>

      <Pagination
        onChange={props.onChange}
        current={props.currentPage}
        total={props.totalPages > 1000 ? 1000 : props.totalPages}
        pageSize={1}
        itemRender={itemRender}
        showTitle={false}
        showLessItems={true}
        showPrevNextJumpers={false}
        showSizeChanger={false}
        showTotal={false}
        hideOnSinglePage
      />
    </>
  );
};

export default resultsPagination;
