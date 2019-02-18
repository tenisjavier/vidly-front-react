// @desc     child     A list of items that one is selected
// @return  return the list and the onItemSelect function on click with the item clicked.
import React from "react";
import _ from "lodash";

function ListGroup(props) {
    const {
        items,
        textProperty,
        valueProperty,
        selectedItem,
        onItemSelect
    } = props;

    if (_.isEmpty(items)) return "No hay Items";
    return (
        <ul className="list-group" style={{ cursor: "pointer" }}>
            {items.map(item => (
                <li
                    onClick={() => onItemSelect(item)}
                    key={item[valueProperty]}
                    className={
                        item[valueProperty] === selectedItem[valueProperty]
                            ? "list-group-item active"
                            : "list-group-item"
                    }
                >
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    );
}

// EDIT VALUES HERE
// textProperty: The key where I can find the name of the item
// valueProperty: The unique id of the item
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default ListGroup;
