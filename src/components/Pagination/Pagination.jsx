import React from "react";
import { Pagination } from "antd";
import PropTypes from "prop-types";

import "./Pagination.css";

const Paginator = ({ total, current, onChange }) => {
  return (
    <div className="pagination">
      <Pagination
        onChange={onChange}
        total={total}
        current={current}
        pageSize={20}
        showSizeChanger={false}
        hideOnSinglePage
      />
    </div>
  );
};

Paginator.propTypes = {
  total: PropTypes.number,
  current: PropTypes.number,
  onChange: PropTypes.func,
};

Paginator.defaultProps = {
  total: 0,
  current: 1,
  onChange: () => {},
};

export default Paginator;
