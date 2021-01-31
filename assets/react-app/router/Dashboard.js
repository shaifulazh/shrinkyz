import React, { Component } from "react";
import Axios from "axios";
import { Chart } from "react-google-charts";
import { Card, CardBody, Col, Row, Spinner } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const year = new Date(Date.now()).getFullYear();
const month = new Date(Date.now()).getMonth() + 1;

export default class Dashboard extends Component {
  state = {
    data: null,
    year: year,
    month: month,
    startDate: new Date(Date.now())
  };
  componentDidMount() {
    this.mounted = true;
    this.getData();
  }

  getData() {
    Axios.get(`/api/admin/dashboard?year=${this.state.year}`)
      .then(response => {
        if (this.mounted) {
          this.setState(() => {
            return { data: response.data };
          });
        }
      })
      .catch(e => console.log(e));
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleChange = date => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    this.setState(
      { data: null, year: year, month: month, startDate: date },
      () => this.getData()
    );
  };

  handleMonth(month) {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "Febuary";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "Ocktober";
      case 11:
        return "November";
      case 12:
        return "Disember";
      default:
        return "Error";
    }
  }
  handleInput = e => {
    const year = new Date(e.target.value).getFullYear();
    const month = new Date(e.target.value).getMonth() + 1;
    this.setState(
      { data: null, year: year, month: month, startDate: date },
      () => this.getData()
    );
  };

  render() {
    console.log("this for dashboard", this.props);
    const { data, year, month } = this.state;

    console.log(data, year, month);

    return (
      <div className="container" style={{ padding: "10px" }}>
        <div style={{ padding: "10px" }}>
          <Row>
            <Col xs="12" sm="6" lg="6">
              <h4>
                <i className="fas fa-home" />
                {"  "}
                Dashboard
              </h4>
            </Col>
            <Col xs="12" sm="6" lg="6">
              <div className="float-right">
                <h6>Change Month and Year </h6>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  className="form-control"
                />
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs="12" sm="6" lg="3" className="my-3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value" style={{ textAlign: "center" }}>
                  {data ? (
                    <h4>
                      RM{" "}
                      {parseFloat(data.total_sum ? data.total_sum : 0).toFixed(
                        2
                      )}
                    </h4>
                  ) : (
                    <Spinner color="light" />
                  )}
                </div>
                <div style={{ textAlign: "center" }}>
                  <h6>Total Sales</h6>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3" className="my-3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <div className="text-value" style={{ textAlign: "center" }}>
                  {data ? <h4>{data.users}</h4> : <Spinner color="light" />}
                </div>
                <div style={{ textAlign: "center" }}>
                  <h6>Customers</h6>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3" className="my-3">
            <Card className="text-white bg-secondary">
              <CardBody className="pb-0">
                <div className="text-value" style={{ textAlign: "center" }}>
                  {data ? (
                    <h4>
                      RM{" "}
                      {parseFloat(
                        data.sum[year] ? data.sum[year] : 0.0
                      ).toFixed(2)}
                    </h4>
                  ) : (
                    <Spinner color="light" />
                  )}
                </div>
                <div style={{ textAlign: "center" }}>
                  <h6>Yearly Sales : {year}</h6>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3" className="my-3">
            <Card className="text-white bg-success">
              <CardBody className="pb-0">
                <div className="text-value" style={{ textAlign: "center" }}>
                  {data ? (
                    <h4>RM {parseFloat(data.month[month]).toFixed(2)}</h4>
                  ) : (
                    <Spinner color="light" />
                  )}
                </div>
                <div style={{ textAlign: "center" }}>
                  <h6>Montly Sales : {this.handleMonth(month)}</h6>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div style={{ padding: "15px" }} />
        <Row>
          <Col sm="12" md="8" lg="6">
            <Card className="">
              <CardBody className="pb-0">
                {data ? (
                  <Chart
                    width={"400px"}
                    height={"320px"}
                    chartType="Bar"
                    loader={
                      <Spinner style={{ width: "3rem", height: "3rem" }} />
                    }
                    data={[
                      ["Month", "sales"],
                      ["Jan", parseFloat(data.month[1])],
                      ["Feb", parseFloat(data.month[2])],
                      ["Mar", parseFloat(data.month[3])],
                      ["Apr", parseFloat(data.month[4])],
                      ["May", parseFloat(data.month[5])],
                      ["Jun", parseFloat(data.month[6])],
                      ["Jul", parseFloat(data.month[7])],
                      ["Aug", parseFloat(data.month[8])],
                      ["Sep", parseFloat(data.month[9])],
                      ["Oct", parseFloat(data.month[10])],
                      ["Nov", parseFloat(data.month[11])],
                      ["Dis", parseFloat(data.month[12])]
                    ]}
                    options={{
                      // Material design options
                      chart: {
                        title: "Total Sales By Month"
                      }
                    }}
                    // For tests
                    rootProps={{ "data-testid": "2" }}
                  />
                ) : (
                  <Spinner style={{ width: "3rem", height: "3rem" }} />
                )}
              </CardBody>
            </Card>
          </Col>

          <Col sm="12" md="8" lg="6">
            <Card className="">
              <CardBody className="pb-0">
                {data ? (
                  <Chart
                    width={"400"}
                    height={"320px"}
                    chartType="LineChart"
                    loader={
                      <Spinner style={{ width: "3rem", height: "3rem" }} />
                    }
                    data={[
                      ["Month", "Order Count"],
                      ["Jan", parseFloat(data.count[1])],
                      ["Feb", parseFloat(data.count[2])],
                      ["March", parseFloat(data.count[3])],
                      ["Apr", parseFloat(data.count[4])],
                      ["May", parseFloat(data.count[5])],
                      ["Jun", parseFloat(data.count[6])],
                      ["Jul", parseFloat(data.count[7])],
                      ["Aug", parseFloat(data.count[8])],
                      ["Sep", parseFloat(data.count[9])],
                      ["Oct", parseFloat(data.count[10])],
                      ["Nov", parseFloat(data.count[11])],
                      ["Dis", parseFloat(data.count[12])]
                    ]}
                    options={{
                      hAxis: {
                        title: "Month"
                      },
                      vAxis: {
                        title: "Orders"
                      }
                    }}
                    rootProps={{ "data-testid": "1" }}
                  />
                ) : (
                  <Spinner style={{ width: "3rem", height: "3rem" }} />
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
