// @desc     parent     A <Table> function component that has a <TableHeader> and a <TableBody>
// @return  A Table filled with the data pass in props
import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = props => {
    const { columns, data, onSort } = props;
    return (
        <table className="table">
            <TableHeader columns={columns} onSort={onSort} />
            <TableBody columns={columns} data={data} />
        </table>
    );
};

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    onSort: PropTypes.func
};

export default Table;
