import React from 'react'
import { useState, useEffect } from 'react'
import Table from './Table'
import TopBar from './TopBar'
import axios from 'axios';

const Dashboard = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        readInvoice()
    }, [])

    const readInvoice = async () => {
        try {
            let readData = {

                "filter": {
                },
                "limit": 1000,
                "page": 0,
                "sort": {}
            }
                  
            const response = await axios.post('http://localhost:3100/api/rest/invoicegenerator/readinvoice', readData);
            setData(response.data.output);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <div>
            <div>
               <TopBar/>
            </div>
            <div>
            <Table data ={data}/>
            </div>
        </div>

    )
}

export default Dashboard
