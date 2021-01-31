import React, { Component } from "react";
import Axios from "axios";
import { Pagination, Table, Spinner } from "react-bootstrap";

export default class CustomerList extends Component {
  constructor(props) {
    super(props);

    this.state = { data: null, active: 1, total: 5, limit: 10, range: null };
  }

  componentDidMount = () => {
    this.mounted = true;
    const { limit } = this.state;
    Axios.get(`/api/admin/customer?page=1&limit=${limit}`)
      .then(response => {
        console.log(response);
        if (this.mounted) {
          console.log(response.data);
          const { data } = response;
          const range = Math.ceil(data.total_count / limit);
          this.setState({
            data: data.items,
            total: data.total_count,
            range: range
          });
        }
      })
      .catch(e => console.log(e));
  };
  componentWillUnmount() {
    this.mounted = false;
  }

  handlePage(page) {
    this.setState({ data: null }, () => {
      Axios.get(`/api/admin/customer?page=${page}&limit=${this.state.limit}`)
        .then(response => {
          if (this.mounted) {
            console.log(response.data);
            const { data } = response;
            this.setState({ data: data.items });
          }
        })
        .catch(e => console.log(e));

      this.setState({ active: page });
    });
  }
  render() {
    const { data, active, range } = this.state;
    let items = [];
    if (range) {
      for (let number = 1; number <= range; number++) {
        items.push(
          <Pagination.Item
            onClick={() => {
              this.handlePage(number);
            }}
            key={number}
            active={number === active}
          >
            {number}
          </Pagination.Item>
        );
      }
    }
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Email </th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Registed On</th>
            </tr>
          </thead>
          <tbody>
            {!data && (
              <tr>
                <td>
                  <Spinner animation="border" />
                </td>
              </tr>
            )}
            {data &&
              data.map(x => (
                <tr key={x.id}>
                  <td>{x.email}</td>
                  <td>{x.firstname}</td>
                  <td>{x.lastname}</td>
                  <td>{x.created_at}</td>
                </tr>
              ))}
          </tbody>
        </Table>

        <Pagination>
          <Pagination.Prev
            onClick={() => this.handlePage(active - 1)}
            disabled={active === 1 ? true : false}
          />
          <Pagination>{items}</Pagination>
          <Pagination.Next
            onClick={() => this.handlePage(active + 1)}
            disabled={active === range}
          />
        </Pagination>
      </div>
    );
  }
}
