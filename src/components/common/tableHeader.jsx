// @desc    <TableHeader> component
// @return  render th table and raise Sort event
import React, { Component } from "react";
import PropTypes from "prop-types";

class TableHeader extends Component {
    state = {
        sortColumn: null,
        sortDirection: null
    };

    raiseSort = column => {
        const { sortDirection } = this.state;
        const direction =
            !sortDirection || sortDirection === "desc" ? "asc" : "desc";
        this.props.onSort({ key: column.key, order: direction });
        this.setState({ sortColumn: column, sortDirection: direction });
    };

    renderSortIcon = column => {
        const { sortColumn, sortDirection } = this.state;
        if (sortColumn !== column) return null;
        else {
            const icon =
                sortDirection === "asc" || sortDirection === null ? (
                    <i className="fa fa-sort-asc" />
                ) : (
                    <i className="fa fa-sort-desc" />
                );
            return icon;
        }
    };

    render() {
        const { columns } = this.props;
        return (
            <thead className="thead-dark">
                <tr>
                    {columns.map(column => (
                        <th
                            className="clickable"
                            key={column.key}
                            onClick={() => {
                                this.raiseSort(column);
                            }}
                        >
                            {column.label} {this.renderSortIcon(column)}
                        </th>
                    ))}
                </tr>
            </thead>
        );
    }
}

//@column   label and key are required
TableHeader.propTypes = {
    columns: PropTypes.array.isRequired
};

export default TableHeader;
