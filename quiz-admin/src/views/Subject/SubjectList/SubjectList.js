import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Table,
    Button
} from 'reactstrap'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SubjectList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xx="12" md="12">
                        <Card>
                            <CardHeader>
                                Listing
                            </CardHeader>
                            <CardBody>
                                <Link to="/subject/new" className="btn btn-primary mb-4">Create new subject</Link>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Puzzle</td>
                                            <td>2018-02-13</td>
                                            <td>
                                                <Button color="warning">Delete</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SubjectList);