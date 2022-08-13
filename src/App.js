
import { Component } from 'react';
import * as uuid from "uuid";
import './App.css';
import { CV } from './components/CV';
import { CVForm } from './components/CVform';
import { Navbar } from "./components/navbar";



class App extends Component{
  constructor(){
    super();

    this.state ={
      personalInfo:{name:'',surname:'',phone:'',email:'',address1:'',address2:'',zip:'',city:'',state:'',photo:'',aboutMe:''},
      education:[{id:uuid.v4(),schoolName:'',titleOfStudy:'',startDate:'',endDate:''}],
      workExperiences:[{id:uuid.v4(),company:'',position:'',tasks:'',startDate:'',endDate:''}],
      skills:'',
      updateValues:true,
     
    }
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleSurnameUpdate = this.handleSurnameUpdate.bind(this);
    this.handlePhoneUpdate = this.handlePhoneUpdate.bind(this);
    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handleAddress1Update = this.handleAddress1Update.bind(this);
    this.handleAddress2Update = this.handleAddress2Update.bind(this);
    this.handleZipUpdate = this.handleZipUpdate.bind(this);
    this.handleCityUpdate = this.handleCityUpdate.bind(this);
    this.handleStateUpdate =this.handleStateUpdate.bind(this);
    this.handlePhotoUpdate =this.handlePhotoUpdate.bind(this);
    this.handleWorkExperienceAdd = this.handleWorkExperienceAdd.bind(this);
    this.handleWorkExperienceDelete = this.handleWorkExperienceDelete.bind(this);
    this.handleCompanyUpdate = this.handleCompanyUpdate.bind(this);
    this.handlePositionUpdate = this.handlePositionUpdate.bind(this);
    this.handleTasksUpdate = this.handleTasksUpdate.bind(this);
    this.handleStartDateUpdate = this.handleStartDateUpdate.bind(this);
    this.handleEndDateUpdate = this.handleEndDateUpdate.bind(this);
    this.handleEducationAdd = this.handleEducationAdd.bind(this);
    this.handleEducationDelete = this.handleEducationDelete.bind(this);
    this.handleSchoolNameUpdate = this.handleSchoolNameUpdate.bind(this);
    this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
    this.handleEducationStartDateUpdate = this.handleEducationStartDateUpdate.bind(this);
    this.handleEducationEndDateUpdate = this.handleEducationEndDateUpdate.bind(this);
    this.handleSkillsUpdate = this.handleSkillsUpdate.bind(this);
    this.handleAboutMEUpdate = this.handleAboutMEUpdate.bind(this);
    this.handleUpdateValuesUpdate = this.handleUpdateValuesUpdate.bind(this);
  }
  //Handles for updates of personal info

  //name handler is using spread operator 
  handleNameUpdate(name){
    this.setState(prevState => ({personalInfo:{...prevState.personalInfo,name:name}}));
      
  }
  handleSurnameUpdate(surname){
    this.setState({
      personalInfo:{name:this.state.personalInfo.name,
                    surname:surname,
                    phone:this.state.personalInfo.phone,
                    email:this.state.personalInfo.email,
                    address1:this.state.personalInfo.address1,
                    address2:this.state.personalInfo.address2,
                    zip: this.state.personalInfo.zip,
                    city:this.state.personalInfo.city,
                    state:this.state.personalInfo.state,
                    photo:this.state.personalInfo.photo}
    });
  }
  handlePhoneUpdate(phone){
    this.setState({
      personalInfo:{name:this.state.personalInfo.name,
                    surname:this.state.personalInfo.surname,
                    phone:phone,
                    email:this.state.personalInfo.email,
                    address1:this.state.personalInfo.address1,
                    address2:this.state.personalInfo.address2,
                    zip: this.state.personalInfo.zip,
                    city:this.state.personalInfo.city,
                    state:this.state.personalInfo.state,
                    photo:this.state.personalInfo.photo}
    });
  }
  handleEmailUpdate(email){
    this.setState({
      personalInfo:{name:this.state.personalInfo.name,
                    surname:this.state.personalInfo.surname,
                    phone:this.state.personalInfo.phone,
                    email:email,
                    address1:this.state.personalInfo.address1,
                    address2:this.state.personalInfo.address2,
                    zip: this.state.personalInfo.zip,
                    city:this.state.personalInfo.city,
                    state:this.state.personalInfo.state,
                    photo:this.state.personalInfo.photo}
    });
  }
  handleAddress1Update(address1){
    this.setState({
      personalInfo:{name:this.state.personalInfo.name,
                    surname:this.state.personalInfo.surname,
                    phone:this.state.personalInfo.phone,
                    email:this.state.personalInfo.email,
                    address1:address1,
                    address2:this.state.personalInfo.address2,
                    zip: this.state.personalInfo.zip,
                    city:this.state.personalInfo.city,
                    state:this.state.personalInfo.state,
                    photo:this.state.personalInfo.photo}
    });
  }
  handleAddress2Update(address2){
    this.setState({
      personalInfo:{name:this.state.personalInfo.name,
                    surname:this.state.personalInfo.surname,
                    phone:this.state.personalInfo.phone,
                    email:this.state.personalInfo.email,
                    address1:this.state.personalInfo.address1,
                    address2:address2,
                    zip: this.state.personalInfo.zip,
                    city:this.state.personalInfo.city,
                    state:this.state.personalInfo.state,
                    photo:this.state.personalInfo.photo}
    });
  }
  handleZipUpdate(zip){
    this.setState({
      personalInfo:{name:this.state.personalInfo.name,
                    surname:this.state.personalInfo.surname,
                    phone:this.state.personalInfo.phone,
                    email:this.state.personalInfo.email,
                    address1:this.state.personalInfo.address1,
                    address2:this.state.personalInfo.address2,
                    zip: zip,
                    city:this.state.personalInfo.city,
                    state:this.state.personalInfo.state,
                    photo:this.state.personalInfo.photo}
    });
  }
  handleCityUpdate(city){
    this.setState({
      personalInfo:{name:this.state.personalInfo.name,
                    surname:this.state.personalInfo.surname,
                    phone:this.state.personalInfo.phone,
                    email:this.state.personalInfo.email,
                    address1:this.state.personalInfo.address1,
                    address2:this.state.personalInfo.address2,
                    zip: this.state.personalInfo.zip,
                    city:city,
                    state:this.state.personalInfo.state,
                    photo:this.state.personalInfo.photo}
    });
  }
  handleStateUpdate(state){
    this.setState({
      personalInfo:{name:this.state.personalInfo.name,
                    surname:this.state.personalInfo.surname,
                    phone:this.state.personalInfo.phone,
                    email:this.state.personalInfo.email,
                    address1:this.state.personalInfo.address1,
                    address2:this.state.personalInfo.address2,
                    zip: this.state.personalInfo.zip,
                    city:this.state.personalInfo.city,
                    state:state,
                    photo:this.state.personalInfo.photo}
    });
  }
  handlePhotoUpdate(photo){
    this.setState({
      personalInfo:{name:this.state.personalInfo.name,
                    surname:this.state.personalInfo.surname,
                    phone:this.state.personalInfo.phone,
                    email:this.state.personalInfo.email,
                    address1:this.state.personalInfo.address1,
                    address2:this.state.personalInfo.address2,
                    zip: this.state.personalInfo.zip,
                    city:this.state.personalInfo.city,
                    state:this.state.personalInfo.state,
                    photo:photo}
    });
  }
  handleAboutMEUpdate(text){
    this.setState(prevState => ({personalInfo:{...prevState.personalInfo,aboutMe:text}}));
  }

  //Handlers for updates of Work parts
  handleWorkExperienceAdd(){
    this.setState({
      workExperiences:[...this.state.workExperiences,{id:uuid.v4(),company:'',position:'',tasks:'',startDate:'',endDate:''}]
    });
  }
  handleWorkExperienceDelete(uuid){
    this.setState({
      workExperiences:this.state.workExperiences.filter(function(experience){
        return experience.id !== uuid
      })
    });
  }
  handleCompanyUpdate(uuid,company){
    this.setState({
      workExperiences:this.state.workExperiences.map(el =>(el.id ===uuid?{...el,company:company}:el))
  });
  }
  handlePositionUpdate(uuid,position){
    this.setState({
      workExperiences:this.state.workExperiences.map(el =>(el.id ===uuid?{...el,position:position}:el))
  });
  }
  handleTasksUpdate(uuid,tasks){
    this.setState({
      workExperiences:this.state.workExperiences.map(el =>(el.id ===uuid?{...el,tasks:tasks}:el))
  });
  }
  handleStartDateUpdate(uuid,startDate){
    this.setState({
      workExperiences:this.state.workExperiences.map(el =>(el.id ===uuid?{...el,startDate:startDate}:el))
  });
  }
  handleEndDateUpdate(uuid,endDate){
    this.setState({
      workExperiences:this.state.workExperiences.map(el =>(el.id ===uuid?{...el,endDate:endDate}:el))
  });
  }

//Handlers for updates of Education parts
  handleEducationAdd(){
    this.setState({
      education:[...this.state.education,{id:uuid.v4(),schoolName:'',titleOfStudy:'',startDate:'',endDate:''}]
    });
  }
  handleEducationDelete(uuid){
    this.setState({
      education:this.state.education.filter(function(education){
        return education.id !== uuid
      })
    });
  }
  handleSchoolNameUpdate(uuid,schoolName){
    this.setState({
      education:this.state.education.map(el =>(el.id ===uuid?{...el,schoolName:schoolName}:el))
  });
  }
  handleTitleUpdate(uuid,title){
    this.setState({
      education:this.state.education.map(el =>(el.id ===uuid?{...el,titleOfStudy:title}:el))
  });
  }
  handleEducationStartDateUpdate(uuid,startDate){
    this.setState({
      education:this.state.education.map(el =>(el.id ===uuid?{...el,startDate:startDate}:el))
  });
  }
  handleEducationEndDateUpdate(uuid,endDate){
    this.setState({
      education:this.state.education.map(el =>(el.id ===uuid?{...el,endDate:endDate}:el))
  });
  }
 handleSkillsUpdate(skills){
  this.setState({
    skills:skills
  });
 }
 handleUpdateValuesUpdate(){
    this.setState((prevState)=>({
      updateValues:!prevState.updateValues
    }));
 }




  render(){
    return(<div className='app'>
          <div className='topbar'>
            <Navbar/>
          </div>

          
          <div className='content'>
            {this.state.updateValues
            ?<CVForm
            personalInfo = {this.state.personalInfo}
            works = {this.state.workExperiences}
            skills = {this.state.skills}
            education = {this.state.education}
            nameChange = {this.handleNameUpdate}
            surnameChange = {this.handleSurnameUpdate}
            phoneChange = {this.handlePhoneUpdate}
            emailChange = {this.handleEmailUpdate}
            address1Change = {this.handleAddress1Update}
            address2Change = {this.handleAddress2Update}
            cityChange = {this.handleCityUpdate}
            photoChange = {this.handlePhotoUpdate}
            aboutMeChange = {this.handleAboutMEUpdate}
            stateChange = {this.handleStateUpdate}
            zipChange = {this.handleZipUpdate}
            schoolChange = {this.handleSchoolNameUpdate}
            titleChange = {this.handleTitleUpdate}
            startDateChange = {this.handleEducationStartDateUpdate}
            endDateChange = {this.handleEducationEndDateUpdate}
            companyChange = {this.handleCompanyUpdate}
            positionChange = {this.handlePositionUpdate}
            tasksChange = {this.handleTasksUpdate}
            startDateWorkChange = {this.handleStartDateUpdate}
            endDateWorkChange = {this.handleEndDateUpdate}
            workDelete = {this.handleWorkExperienceDelete}
            educationDelete = {this.handleEducationDelete}
            workAdd = {this.handleWorkExperienceAdd}
            educationAdd = {this.handleEducationAdd}
            skillsChange = {this.handleSkillsUpdate}
            aboutChange = {this.handleAboutMEUpdate}
          />
            :<CV
            personalInfo = {this.state.personalInfo}
            works = {this.state.workExperiences}
            skills = {this.state.skills}
            education = {this.state.education}
            />
          }
            
          </div>
          <div className='bottombar'>
          {!this.state.updateValues && <button className='export'>Export PDF</button> }
          <button className='submit' onClick={this.handleUpdateValuesUpdate}>{this.state.updateValues? "Submit":"Edit"}</button>
          </div>
          
    </div>);
  }

}


export default App;
