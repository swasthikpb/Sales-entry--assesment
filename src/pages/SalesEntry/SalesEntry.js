import React from 'react'
import {Card, CardBody, CardHeader, CardTitle} from 'reactstrap'
import Headers from '../../components/Headers/Headers'
import Details from '../../components/Details/Details'

const SalesEntry = ({handleClick,handleInputChange, handleHeaderInputChange}) => {
  return (
    <Card className='d-flex felx-row'>
        <CardHeader>
            <CardTitle>Sales Entity</CardTitle>
        </CardHeader>
        <CardBody>

    <Headers handleHeaderInputChange={handleHeaderInputChange} />
    <Details handleClick={handleClick} handleInputChange={handleInputChange} />
        </CardBody>
    </Card>
  )
}

export default SalesEntry