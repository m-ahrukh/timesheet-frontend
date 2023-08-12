import React, { Component } from 'react'
import TemplateService from '../services/TemplateService'

import { useParams } from 'react-router-dom';
// import EmployeeService from '../services/EmployeeService';

export function withRouter(Children,id, employeeId) { //added some args
    return (props) => {
        const match = {
            params: useParams(),
            id: id, //added
            employeeId: employeeId //added
        };
        // const match = { params: useParams() }; //removed
        return <Children {...props} match={match} />
    }
}

class GetTemplate extends Component {
    constructor(props) {
        super(props)
        // let temp = [{ "id": 1, "templateDay": "Mon",createdOn:"Mon",checkIn:"Mon",checkOut:"Agle Mon",lunchBreakStart:"1 bje",lunchBreakEnd:"2 bje" }]  //dummy data del krdena beshak
        this.state = {
            // templates: temp, //dummy delete krdena
            // employeeId: 11, //dummy delete krdena
            templates:[],
            employeeId: this.props.match.params.id,
        }

        this.addTemplate = this.addTemplate.bind(this)
        this.editTemplate = this.editTemplate.bind(this)
        this.handleEvent = this.handleEvent.bind(this)
    }

    addTemplate() {
        window.location.replace(`/${this.state.employeeId}/add-template`);
        // this.props.history.push('/add-employee');
    }

    editTemplate(id) {
        // console.log("id edit wali", id)
        // console.log("this.state.employeeId in edit",this.state.employeeId )//removed this.state.id kyunke wo hai hi nhi
    
        // console.log(this.state.employeeId + "  " + this.state.id) 
        window.location.replace(`/${this.state.employeeId}/update-template/${id}`);
        //this.props.history.push(`/update-employee/${id}`)
    }

    deleteTemplate(id){
        TemplateService.deleteTemplate(this.state.employeeId, id).then((res)=> {
            this.setState({templates: this.state.templates.filter(template => template.id !== id)});
        })
    }

    componentDidMount() {
        // console.log("id mount wali " + this.state.employeeId);
        TemplateService.getTemplates(this.state.employeeId).then((res) =>{
            this.setState({templates: res.data})
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {

    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() { }

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <div>
                <h2 className='text-center'>Timesheet Templates</h2>
                <button className='btn btn-primary' onClick={this.addTemplate}>Add Template</button>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Template ID</th>
                                <th>Template Day</th>
                                <th>Created On</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Lunch Break Start</th>
                                <th>Lunch Break End</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.templates.map(
                                    template =>
                                        <tr key={template.id}>
                                            <td>{template.id}</td>
                                            <td>{template.templateDay}</td>
                                            <td>{template.createdOn}</td>
                                            <td>{template.checkIn}</td>
                                            <td>{template.checkOut}</td>
                                            <td>{template.lunchBreakStart}</td>
                                            <td>{template.lunchBreakEnd}</td>
                                            <td>
                                                <button onClick={() => { this.editTemplate(template.id) }} className='btn btn-info' >Update</button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => {this.deleteTemplate(template.id)}} className='btn btn-danger' >Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default withRouter(GetTemplate);