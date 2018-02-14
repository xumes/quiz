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
import { thunkFetchSubjectList } from './../../../actions/Subject/SubjectThunk'

class SubjectList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchSubjectList()
    }

    render() {
        console.log(this.props.subjectList)
        let { subjectList } = this.props 
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
                                            <th>Description</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>                                        
                                        {subjectList.subjects.map((subject, index) => (
                                             <tr key={subject._id}>
                                             <td>{ subject.name }</td>
                                             <td>{ subject.description }</td>
                                             <td>
                                                 <Button color="warning">Delete</Button>
                                             </td>
                                         </tr>  
                                        ))}
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
        subjectList: state.subjectStore.subjectList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSubjectList: () => dispatch(thunkFetchSubjectList())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SubjectList);