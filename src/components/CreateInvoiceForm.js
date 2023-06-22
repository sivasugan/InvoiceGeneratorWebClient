import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { SocketServer } from '../functions/SocketServer';

function CreateInvoiceForm() {
  const socketServer = new SocketServer('pdfGenerated')

  const [isSubmit, setIsSubmit] = useState(false)
  const [invoiceData, setInvoiceData] = useState({
    CustomerId: 0,
    InvoiceNumber: "",
    InvoiceDate: "",
    DueDate: "",
    TotalAmount: "",
    Status: "Paid",
    IsNewFile: true
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    invoiceData && await socketServer.EmitDataToSocket('requestPDF', invoiceData)
    setIsSubmit(true)
  };

  const handleInputChange = (event) => {
    setIsSubmit(false)
    const { id, value } = event.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  return (
    <div className='loginbody' style={{ background: "#ADD8E6", left: "50px", width: "400px", height: "600px", margin: "2% auto", borderRadius: "8px", boxShadow: '0 3px 50px 0 rgba(0,0,0,.1)' }}>
      <div className="container" style={{ width: "400px", position: "relative" }}>
        <h3 style={{ textAlign: "center" }}>Create Invoice</h3>
        <Form onSubmit={handleSubmit} className="create-invoice-form">

          <Form.Group controlId="CustomerId">
            <Form.Label>Customer ID</Form.Label>
            <Form.Control required type="number" placeholder="Enter Customer ID" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="InvoiceNumber">
            <Form.Label>Invoice Number</Form.Label>
            <Form.Control required type="text" placeholder="Enter Invoice Number" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="InvoiceDate">
            <Form.Label>Invoice Date</Form.Label>
            <Form.Control required type="date" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="DueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control required type="date" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="TotalAmount">
            <Form.Label>Total Amount</Form.Label>
            <Form.Control required type="number" step="0.01" placeholder="Enter Total Amount" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="Status">
            <Form.Label>Status</Form.Label>
            <Form.Control required as="select" onChange={handleInputChange}>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
              <option value="pending">Pending</option>
            </Form.Control>
          </Form.Group>
          <div className="create-invoice-button">
            <Button variant="primary" type="submit" disabled={isSubmit}>
              Create Invoice
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CreateInvoiceForm;
