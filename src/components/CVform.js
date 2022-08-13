import { Component } from "react";
import './CVform.css';
import * as uuid from "uuid";

 class PersonalInfoForm extends Component{
    constructor(props){
        super(props);

        this.handleAddress1Change=this.handleAddress1Change.bind(this);
        this.handleAddress2Change = this.handleAddress2Change.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleZIPChange = this.handleZIPChange.bind(this);
        this.handleAboutMeChange = this.handleAboutMeChange.bind(this);

    }

    handleNameChange(e){
        this.props.nameChange(e.target.value);
    }
    handleSurnameChange(e){
        this.props.surnameChange(e.target.value);
    }
    handleEmailChange(e){
        this.props.emailChange(e.target.value);
    }
    handlePhoneChange(e){

        this.props.phoneChange(e.target.value);
    }
    handleAddress1Change(e){
        this.props.address1Change(e.target.value);
    }
    handleAddress2Change(e){
        this.props.address2Change(e.target.value);
    }
    handleCityChange(e){
        this.props.cityChange(e.target.value);
    }
    handleZIPChange(e){
        this.props.zipChange(e.target.value);
    }
    handleStateChange(e){
        this.props.stateChange(e.target.value);
    }
    handleAboutMeChange(e){
        this.props.aboutChange(e.target.value);
    }
    

    render(){
        return(<div className="personalInfo">
                
            <label> Name
                <div className="inputGroup">
                <input
                    type="text"
                    className="half"
                    value={this.props.personalInfo.name}
                    placeholder="First name"
                    onChange={this.handleNameChange}
                />
                <input
                    type="text"
                    className="half"
                    value={this.props.personalInfo.surname}
                    placeholder="Last name"
                    onChange={this.handleSurnameChange}
                />
                </div>
                
            </label>
            <label> Contact Info
                <div  className="inputGroup">
                    <input
                        type="email"
                        placeholder="Email"
                        className="half"
                        value={this.props.personalInfo.email}
                        onChange={this.handleEmailChange}
                    />
                     <input
                        type="tel"
                        className="half"
                        placeholder="Phone number"
                        maxLength={10}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                        value={this.props.personalInfo.phone}
                        onChange={this.handlePhoneChange}
                    />
                </div>
                
            </label>
            <label> Address Information
                <div  className="inputGroup">
                <input
                    type="text"
                    placeholder="Adress Line 1"
                    value={this.props.personalInfo.address1}
                    onChange={this.handleAddress1Change}
                />
                <input
                    type="text"
                    placeholder="Adress Line 2"
                    value={this.props.personalInfo.address2}
                    onChange={this.handleAddress2Change}
                />
                <input
                    type="text"
                    className="third"
                    placeholder="City"
                    value={this.props.personalInfo.city}
                    onChange={this.handleCityChange}
                />
                <input
                    type="text"
                    className="third"
                    placeholder="Zip Code"
                    value={this.props.personalInfo.zip}
                    onChange={this.handleZIPChange}
                />
                <input
                    type="text"
                    className="third"
                    placeholder="State"
                    value={this.props.personalInfo.state}
                    onChange={this.handleStateChange}
                />

                </div>
                
            </label>
            <label> About Me
                    <textarea
                        data-id={this.props.personalInfo.id}
                        rows={5}
                        value={this.props.personalInfo.aboutMe}
                        onChange={this.handleAboutMeChange}
                    />
                </label>

        </div>);
    }


 }

 class EducationInfoForm extends Component{
    constructor(props){
        super(props);
        this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleStartDateChange =this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleSchoolNameChange(e){
        this.props.schoolChange(e.target.getAttribute('data-id'),e.target.value);
    }
    handleTitleChange(e){
        this.props.titleChange(e.target.getAttribute('data-id'),e.target.value);
    }
    handleStartDateChange(e){
        this.props.startDateChange(e.target.getAttribute('data-id'),e.target.value);
    }
    handleEndDateChange(e){
        this.props.endDateChange(e.target.getAttribute('data-id'),e.target.value);
    }
    handleDelete(e){
        this.props.handleDelete(e.target.getAttribute('data-id'));
    }

    render(){
        return(<div>
                <label> 
                    <div className="firstRow">
                        Program information
                        <button className="close" alt="Delete" data-id={this.props.education.id} onClick={this.handleDelete} >X</button>
                    </div>
                    <div className="inputGroup">
                        <input
                            data-id={this.props.education.id}
                            type="text"
                            placeholder="School Name"
                            value={this.props.education.schoolName}
                            onChange={this.handleSchoolNameChange}
                        />
                         <input
                            data-id={this.props.education.id}
                            type="text"
                            placeholder="Title of Study:"
                            value={this.props.education.title}
                            onChange={this.handleTitleChange}
                        />

                    </div>                   
                </label>
                <label> Education Dates

                    <div className="inputGroup">
                        <input
                            data-id={this.props.education.id}
                            type="month"
                            className="half"
                            placeholder="Start date"
                            value={this.props.education.startDate}
                            onChange={this.handleStartDateChange}
                        />
                        <input
                            data-id={this.props.education.id}
                            type="month"
                            className="half"
                            placeholder="End date"
                            value={this.props.education.endDate}
                            onChange={this.handleEndDateChange}
                        />

                    </div>
                    
                </label>
                

        </div>);

    }
 }

 class WorkExperinceForm extends Component{
    constructor(props){
        super(props);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleTasksChange = this.handleTasksChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleCompanyChange(e){
        this.props.companyChange(e.target.getAttribute('data-id'),e.target.value)
    }
    handlePositionChange(e){
        this.props.positionChange(e.target.getAttribute('data-id'),e.target.value)
    }
    handleTasksChange(e){
        this.props.tasksChange(e.target.getAttribute('data-id'),e.target.value)
    }
    handleStartDateChange(e){
        this.props.startDateWorkChange(e.target.getAttribute('data-id'),e.target.value)
    }
    handleEndDateChange(e){
        this.props.endDateWorkChange(e.target.getAttribute('data-id'),e.target.value)
    }
    handleDelete(e){
        this.props.handleDelete(e.target.getAttribute('data-id'));
    }


    render(){
        return(<div>
                <label> 
                    
                    <div className="firstRow">
                        Positional info
                        <button className="close" alt="Delete" data-id={this.props.work.id} onClick={this.handleDelete} >X</button>
                    </div>
                    <div className="inputGroup">
                        <input
                            data-id={this.props.work.id}
                            type="text"
                            placeholder="Company Name"
                            value={this.props.work.company}
                            onChange={this.handleCompanyChange}
                        />
                        <input
                            data-id={this.props.work.id}
                            type="text"
                            placeholder="Position"
                            value={this.props.work.position}
                            onChange={this.handlePositionChange}
                        />

                    </div>
                </label>
                <label> Experince Dates
                    <div className="inputGroup">
                        <input
                            data-id={this.props.work.id}
                            type="month"
                            placeholder="Start Date"
                            className="half"
                            value={this.props.work.startDate}
                            onChange={this.handleStartDateChange}
                        />
                        <input
                            data-id={this.props.work.id}
                            type="month"
                            className="half"
                            placeholder="End Date"
                            value={this.props.work.endDate}
                            onChange={this.handleEndDateChange}
                        />
                    </div>
                    
                </label>
                
                <label> Main Tasks
                    <textarea
                        data-id={this.props.work.id}
                        rows={5}
                        value={this.props.work.tasks}
                        onChange={this.handleTasksChange}
                    />
                </label>

        </div>);

    }


 }

 class SkillsForm extends Component{
    constructor(props){
        super(props);
        this.handleSkillsChange = this.handleSkillsChange.bind(this);
    }
    handleSkillsChange(e){
        this.props.skillsChange(e.target.value);
    }

    render(){
        return(<textarea
                className="skillsText"
                rows={5}
                value={this.props.skills}
                onChange={this.handleSkillsChange}
            />);
    }
 }

 class CVForm extends Component{


    render(){
        let workrows = [];
        let educationrows = [];
        this.props.works.forEach(workexp => {
            workrows.push(<WorkExperinceForm
                        key={workexp.id}
                        work = {workexp}
                        companyChange = {this.props.companyChange}
                        positionChange = {this.props.positionChange}
                        tasksChange = {this.props.tasksChange}
                        startDateWorkChange = {this.props.startDateWorkChange}
                        endDateWorkChange = {this.props.endDateWorkChange}
                        handleDelete = {this.props.workDelete}
            
                        />);
            workrows.push(<hr key = {uuid.v4()}/>);
            
        });
        this.props.education.forEach(educationexp => {
            educationrows.push(<EducationInfoForm
                                key={educationexp.id}
                                education = {educationexp}
                                schoolChange = {this.props.schoolChange}
                                titleChange = {this.props.titleChange}
                                startDateChange = {this.props.startDateChange}
                                endDateChange = {this.props.endDateChange}
                                handleDelete = {this.props.educationDelete}
                                />);
            educationrows.push(<hr key = {uuid.v4()}/>);
            
        });


        return(<div className="cvform">
                <h1>Personal Info</h1>
                <PersonalInfoForm
                personalInfo = {this.props.personalInfo}
                nameChange = {this.props.nameChange}
                surnameChange = {this.props.surnameChange}
                phoneChange = {this.props.phoneChange}
                emailChange = {this.props.emailChange}
                address1Change = {this.props.address1Change}
                address2Change = {this.props.address2Change}
                cityChange = {this.props.cityChange}
                stateChange = {this.props.stateChange}
                zipChange = {this.props.zipChange}
                aboutChange = {this.props.aboutChange}

                />
                <h1>Work Experience</h1>
                {workrows}
                <div className="add">
                    <button onClick={this.props.workAdd}>Add Work Experience</button>
                </div>
                
                <h1>Studies</h1>
                {educationrows}
                <div className="add">
                    <button onClick={this.props.educationAdd}>Add Education</button>
                </div>
                <h1>Skills</h1>
                <SkillsForm
                    skills = {this.props.skills}
                    skillsChange = {this.props.skillsChange}
                />


        </div>);
    }
 }

 export {CVForm};

 

