import React, { Component } from "react";
import axios from "axios";
import Borang from "./Borang";
import { Table, Spinner, Pagination } from "react-bootstrap";
import PaginateOrder from "./PaginateOrder";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultData: null,
      data: null,
      limit: 2,
      range: null,
      active: 1,
      statusFilter: "NONE"
    };
    this.filterDelete = this.filterDelete.bind(this);
    this.filterStatus = this.filterStatus.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    const { limit } = this.state;
    axios
      .get(`/api/admin/order?page=1&limit=${limit}`)
      .then(response => {
        console.log("response", response.data);
        const { data } = response;
        const range = Math.ceil(data.pagination.total_count / limit);
        if (this.mounted) {
          this.setState({
            data: data.pagination.items,
            range: range,
            defaultData: data.data
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  }
  handlePage = page => {
    this.setState({ data: null, active: page, statusFilter: "NONE" }, () => {
      axios
        .get(`/api/admin/order?page=${page}&limit=${this.state.limit}`)
        .then(response => {
          if (this.mounted) {
            const { data } = response;
            this.setState({ data: data.pagination.items });
          }
        })
        .catch(e => console.log(e));
    });
  };

  filterStatus(value) {
    let { defaultData } = this.state;
    if ("NONE" === value) {
      this.setState({ data: defaultData });
      return;
    }
    let filter = defaultData.filter(x => x.status === value);
    this.setState({ data: filter });
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  filterDelete(e) {
    let { data } = this.state;
    let deleted = data.filter(x => x.id !== e);
    this.setState({ data: deleted });
  }

  resetStatusFilter = value => {
    this.setState({ statusFilter: value });
  };
  render() {
    console.log(this.state);
    const { data, active, range } = this.state;
    let items = [];
    if (range) {
      for (let number = 1; number <= range; number++) {
        items.push(
          <Pagination.Item
            onClick={() => this.handlePage(number)}
            key={number}
            active={number === active}
          >
            {number}
          </Pagination.Item>
        );
      }
    }
    return (
      <React.Fragment>
        <Borang
          data={data}
          filter={this.filterDelete}
          filterStatus={this.filterStatus}
          resetStatusFilter={this.resetStatusFilter}
          statusFilter={this.state.statusFilter}
        />
        <Pagination>
          <Pagination.Prev
            onClick={() => this.handlePage(active - 1)}
            disabled={active === 1 ? true : false}
          />
          <Pagination>{items}</Pagination>
          <Pagination.Last
            onClick={() => this.handlePage(active + 1)}
            disabled={active === range ? true : false}
          />
        </Pagination>

        <PaginateOrder />
      </React.Fragment>
    );
  }
}
export default OrderList;
