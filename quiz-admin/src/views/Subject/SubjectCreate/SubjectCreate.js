import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

import { connect } from 'react-redux'
import { thunkCreateSubject } from './../../../actions/Subject/SubjectThunk'

class SubjectCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {subject: {name: '', description:''}}
        
        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        
    }

    handleChangeInput(event) {
        const { target }  = event
        const { value, name } = target

        let { subject } = this.state
        subject[name] = value 

        return this.setState({ subject })
    }

    handleCreate(subject) {
        this.props.createSubject(subject)
        this.state.subject = {name: '', description: ''}
        this.props.history.push('/subject/list')
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xx="12" md="12">
                        <Card>
                            <CardHeader>
                                Creating a new subject
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="name">Subject Name:</Label>
                                        <Input type="text" name="name" placeholder="Enter a Subject name" onChange={this.handleChangeInput}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="description">Subject Description</Label>
                                        <Input type="textarea" name="description" placeholder="Enter a Subject description" onChange={this.handleChangeInput}></Input>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button type="button" color="primary" onClick={() => this.handleCreate(this.state.subject)}>Create</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        subject: state.subjectStore.newSubject,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createSubject: (subject) => dispatch(thunkCreateSubject(subject))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SubjectCreate);