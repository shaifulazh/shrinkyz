import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id={"category" + this.props.id}
        // tabindex="-1"
        role="dialog"
        aria-labelledby={"category" + this.props.id + "Label"}
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 style={{ color: "black" }}>Delete</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ color: "black" }}>
              Deleting this Category will delete all product for this category.
              Confirm Delete Category "{this.props.name}" ? .
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                onClick={() => this.props.delete(this.props.id)}
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
