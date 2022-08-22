import { Component } from "react";
import '../styles/CV.css';


 class PersonalInfo extends Component{
    render(){
        return(<div className="personalInfo">
                    <table>
                         <colgroup>
                            <col span="1" className="first"/>
                            <col span="1" />
                           
                        </colgroup>
                        <tbody>
                            <tr>
                                <td className="name">
                                    <h2>{this.props.info.name+ ' '+this.props.info.surname}</h2>
                                </td>
                                <td className="address" >{this.props.info.address1}<br />
                                     {this.props.info.address2} {this.props.info.address2.length === 0 ? null:<br/>}
                                     {this.props.info.zip +' '+this.props.info.city}<br />
                                     {this.props.info.state}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} >
                                    <div className="contacts">
                                        <div className="email"><h4>email: </h4>{this.props.info.email}</div>
                                        <div className="phone"><h4>tel: </h4>{this.props.info.phone}</div>
                                    </div>
                                   
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <div className="aboutMe">
                    <h3>About me</h3>
                    <p>
                        {this.props.info.aboutMe}
                    </p>
                    </div>
        
                </div>);
    }

    
 }

 class EducationInfo extends Component{
    render(){
        return(<div className="education">
                    <table>
                        <tbody>
                            <tr>
                                <td className="dates">{this.props.info.startDate + '    ' + this.props.info.endDate}</td>
                                <td><h4>{this.props.info.schoolName} </h4></td>
                            </tr>
                            <tr>
                                <td className="dates"></td>
                                <td><h5>{this.props.info.titleOfStudy}</h5></td>
                            </tr>
                        </tbody>
                    </table>
            </div>);
    }
 }

 class WorkExperince extends Component{
    render(){
        return(<div className="work">
                    <table>
                        <tbody>
                            <tr>
                                <td className="dates">{this.props.info.startDate + '    ' + this.props.info.endDate}</td>
                                <td><h4>{this.props.info.company}</h4></td>
                            </tr>
                            <tr>
                                <td className="dates"></td>
                                <td><h5>{this.props.info.position}</h5></td>
                            </tr>
                            <tr>
                                <td className="dates"></td>
                                <td>{this.props.info.tasks}</td>
                            </tr>
                        </tbody>
                    </table>
            </div>);
    }
    
 }

 class CV extends Component{
    render(){
        let workrows = [];
        let educationrows = [];
        this.props.works.forEach(work => {
            if(work.company.length !== 0){
                workrows.push(<WorkExperince
                    info = {work}/>);
            }  
        });
        this.props.education.forEach(edu =>{
            if(edu.schoolName.length !== 0){
                educationrows.push(<EducationInfo
                    info = {edu}
                    />)
            }
           
        });

        return(<div className="cv" id="cv_div">
                <PersonalInfo
                    info = {this.props.personalInfo}
                ></PersonalInfo>
                <h3>Work experience</h3>
                {workrows}
                <h3>Education</h3>
                {educationrows}
        </div>)
    }
 }

 export {CV};