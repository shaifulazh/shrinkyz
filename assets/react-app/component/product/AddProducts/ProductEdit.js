import React from "react";

export default function ProductEdit() {
  const [productName, setproductName] = useState(null);
  const [price, setprice] = useState(null);
  const [stock, setstock] = useState(null);

  return (
    <div>
      <Row>
        <Col xs="12" md="6" xl="6">
          <label>Product Name</label>
          <input
            required
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
            className="form-control"
          />
          <label>Price</label>
          <input
            required
            type="number"
            onChange={(e) => this.setState({ price: e.target.value })}
            className="form-control"
            style={{ width: "10em" }}
            min="0"
          />
          <label>Stock</label>
          <input
            required
            style={{ width: "10em" }}
            type="number"
            onChange={(e) => this.setState({ stock: e.target.value })}
            className="form-control"
            min="0"
          />
        </Col>
        <Col xs="12" md="6" xl="6">
          <label>Product Description</label>
          <textarea
            required
            className="form-control mb-3"
            onChange={(e) => this.setState({ desc: e.target.value })}
          />
        </Col>
      </Row>
    </div>
  );
}
