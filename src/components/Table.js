import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import { SocketServer } from '../functions/SocketServer';


const InvoiceTable = (props) => {
    console.log("Executing InvoiceTable")
    const socketServer = new SocketServer('pdfGenerated')
    const [tableData, setTableData] = useState([])

    const handleDownload = (tableRow) => {
        console.log("wewewewew", tableRow)
        tableRow.IsNewFile = false
        socketServer.EmitDataToSocket('requestPDF', tableRow)
    }

    useEffect(() => {
        setTableData(props.data)
    }, [props.data])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>InvoiceId</th>
                    <th>CustomerId</th>
                    <th>InvoiceNumber</th>
                    <th>InvoiceDate</th>
                    <th>DueDate</th>
                    <th>TotalAmount</th>
                    <th>Status</th>
                    <th>Download</th>
                </tr>
            </thead>
            <tbody className='invoicetable-body'>
                {tableData.map((item) => (
                    <tr key={item.InvoiceId}>
                        <td>{item.InvoiceId}</td>
                        <td>{item.CustomerId}</td>
                        <td>{item.InvoiceNumber}</td>
                        <td>{item.InvoiceDate}</td>
                        <td>{item.DueDate}</td>
                        <td>{item.TotalAmount}</td>
                        <td>{item.Status}</td>
                        <td >
                            <span style={{cursor:"pointer"}}>
                                <FaDownload onClick={() => handleDownload(item)} />
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>

    )
}

export default InvoiceTable
