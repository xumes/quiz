import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Table,
    Button,
    Badge
} from 'reactstrap'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { thunkFetchUserList } from './../../../actions/User/UserThunk'

class UserList extends Component {
    constructor(props) {
        super(props)

        //this.handleDeleteUser = this.handleDeleteUser.bind(this)
    }

    componentDidMount(){
        this.props.fetchUserList()
    }

    // handleDeleteUser(user){
    //     return this.props.deleteUser(user)
    // } 

    render() {
        console.log("Props: ", this.props.userList)
        let { userList } = this.props 
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xx="12" md="12">
                        <Card>
                            <CardHeader>
                                Listing
                            </CardHeader>
                            <CardBody>
                                <Link to="/user/new" className="btn btn-primary mb-4">Create new user</Link>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Active</th>
                                            
                                           
                                        </tr>
                                    </thead>
                                    <tbody>                                        
                                        {userList.users.map((user, index) => (
                                             <tr key={user._id}>
                                             <td>{ user.name }</td>
                                             <td>{ user.email }</td>
                                             <td>{ user.active ? <Badge color="primary">Active</Badge> : <Badge color="danger">Deactive</Badge> }</td>
                                             {/*<td>
                                                 <Button color="warning" onClick={() => this.handleDeleteUser(user)}>Delete</Button>
                                             </td>*/}
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
        userList: state.userStore.userList,
        //deleteUser: state.userStore.deleteUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserList: () => dispatch(thunkFetchUserList()),
        //deleteUser: (user) => dispatch(thunkDeleteUser(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);