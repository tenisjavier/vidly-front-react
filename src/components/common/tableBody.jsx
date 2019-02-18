// @desc    child   a table with boostrap
// @return  The body of the table

import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

class TableBody extends Component {
    // @desc    return the fix content of a column or the item
    renderCell = (item, column) => {
        if (column.content) return column.content(item);
        return _.get(item, column.key);
    };

    // @desc    return a unique key for the cell
    createKey = (item, column) => {
        return item._id + column.key;
    };

    render() {
        const { data, columns } = this.props;
        return (
            <tbody>
                {data &&
                    data.map(item => (
                        <tr key={item._id}>
                            {columns.map(column => (
                                <td key={this.createKey(item, column)}>
                                    {this.renderCell(item, column)}
                                </td>
                            ))}
                        </tr>
                    ))}
            </tbody>
        );
    }
}

TableBody.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
};

export default TableBody;
