import { Component } from "react";

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
        this.handlePhotoChange =this.handlePhotoChange.bind(this);

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
        this.props.CityChange(e.target.value);
    }
    handleZIPChange(e){
        this.props.zipChange(e.target.value);
    }
    handleStateChange(e){
        this.props.stateChange(e.target.value);
    }
    handlePhotoChange(e){
        this.props.photoChange(e.target.value);
    }

    render(){
        return(<div className="personalInfo">
            <label> First Name:
                <input
                    type="text"
                    value={this.props.personalInfo.name}
                    onChange={this.handleNameChange}
                />
            </label>
            <label> Last Name:
                <input
                    type="text"
                    value={this.props.personalInfo.surname}
                    onChange={this.handleSurnameChange}
                />
            </label>
            <label> Email:
                <input
                    type="email"
                    value={this.props.personalInfo.email}
                    onChange={this.handleEmailChange}
                />
            </label>
            <label> Phone Number:
                <input
                    type="tel"
                    value={this.props.personalInfo.phone}
                    onChange={this.handlePhoneChange}
                />
            </label>
            <label> Address Line 1:
                <input
                    type="text"
                    value={this.props.personalInfo.address1}
                    onChange={this.handleAddress1Change}
                />
            </label>
            <label> Address Line 2:
                <input
                    type="text"
                    value={this.props.personalInfo.address2}
                    onChange={this.handleAddress2Change}
                />
            </label>
            <label> City:
                <input
                    type="text"
                    value={this.props.personalInfo.city}
                    onChange={this.handleCityChange}
                />
            </label>
            <label> Zip Code:
                <input
                    type="text"
                    value={this.props.personalInfo.zip}
                    onChange={this.handleZIPChange}
                />
            </label>
            <label> State:
                <input
                    type="text"
                    value={this.props.personalInfo.state}
                    onChange={this.handleStateChange}
                />
            </label>
            <label> Photo:
                <input
                    type="image"
                    value={this.props.personalInfo.photo}
                    onChange={this.handlePhotoChange}
                    alt="your image"
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
    }
    handleSchoolNameChange(e){
        this.props.schoolChange(e.target.getAttribute('data-id'),e.target.value)
    }
    handleTitleChange(e){
        this.props.titleChange(e.target.getAttribute('data-id'),e.target.value)
    }
    handleStartDateChange(e){
        this.props.startDateChange(e.target.getAttribute('data-id'),e.target.value)
    }
    handleEndDateChange(e){
        this.props.endDateChange(e.target.getAttribute('data-id'),e.target.value)
    }

    render(){
        return(<div>
                <label> School Name:
                    <input
                    data-id={this.props.education.id}
                    type="text"
                    value={this.props.education.schoolName}
                    onChange={this.handleSchoolNameChange}
                    />
                </label>
                <label> Title of Study:
                    <input
                    data-id={this.props.education.id}
                    type="text"
                    value={this.props.education.title}
                    onChange={this.handleTitleChange}
                    />
                </label>
                <label> Start Date:
                    <input
                    data-id={this.props.education.id}
                    type="date"
                    value={this.props.education.startDate}
                    onChange={this.handleStartDateChange}
                    />
                </label>
                <label> End Date:
                    <input
                    data-id={this.props.education.id}
                    type="date"
                    value={this.props.education.endDate}
                    onChange={this.handleEndDateChange}
                    />
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


    render(){
        return(<div>
                <label> Company Name:
                    <input
                    data-id={this.props.work.id}
                    type="text"
                    value={this.props.work.company}
                    onChange={this.handleCompanyChange}
                    />
                </label>
                <label> Position:
                    <input
                    data-id={this.props.work.id}
                    type="text"
                    value={this.props.work.position}
                    onChange={this.handlePositionChange}
                    />
                </label>
                <label> Main Tasks:
                    <input
                    data-id={this.props.work.id}
                    type="textarea"
                    value={this.props.work.tasks}
                    onChange={this.handletasksChange}
                    />
                </label>
                <label> Start Date:
                    <input
                    data-id={this.props.work.id}
                    type="date"
                    value={this.props.work.startDate}
                    onChange={this.handleStartDateChange}
                    />
                </label>
                <label> End Date:
                    <input
                    data-id={this.props.work.id}
                    type="date"
                    value={this.props.work.endDate}
                    onChange={this.handleEndDateChange}
                    />
                </label>

        </div>);

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
            
                        />);
            
        });
        this.props.education.forEach(educationexp => {
            educationrows.push(<EducationInfoForm
                                key={educationexp.id}
                                education = {educationexp}
                                schoolChange = {this.props.schoolChange}
                                titleChange = {this.props.titleChange}
                                startDateChange = {this.props.startDateChange}
                                endDateChange = {this.props.endDateChange}
                                />);
            
        });


        return(<div>
                <h1>PersonalInfoForm</h1>
                <PersonalInfoForm
                personalInfo = {this.props.personalInfo}
                nameChange = {this.props.nameChange}
                surnameChange = {this.props.surnameChange}
                phoneChange = {this.props.phoneChange}
                emailChange = {this.props.emailChange}
                address1Change = {this.props.address1Change}
                address2Change = {this.props.address2Change}
                cityChange = {this.props.cityChange}
                photoChange = {this.props.photoChange}
                stateChange = {this.props.stateChange}
                zipChange = {this.props.zipChange}

                />
                <h1>Work Experience</h1>
                {workrows}
                <h1>Studies</h1>
                {educationrows}
            


        </div>);
    }
 }

 export {CVForm};

 

