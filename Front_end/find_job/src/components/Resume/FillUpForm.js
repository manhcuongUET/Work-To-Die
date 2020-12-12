import React, { useEffect, useState } from 'react'
import { Route , Link } from "react-router-dom"
import "./fillUpForm.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Form, Row, Col, InputGroup } from "react-bootstrap";
import axiosInstance from "../../utils/axios"



export const FillUpForm = () => {



    const [isFormFillUp, setIsFormFillUp] = useState(false);

    const [validated, setValidated] = useState(false);
    const [education, setEducation] = useState({
        start: "",
        graduated: "",
        school: ""
    })
    const [education1, setEducation1] = useState({
        start: "",
        graduated: "",
        school: ""
    })
    const [experience1, setExperience1] = useState({
        start: "",
        end: "",
        text: "",
    })
    const [experience, setExperience] = useState({
        start: "",
        end: "",
        text: "",
    })
    const [certificate, setCertificate] = useState({
        specialized: "",
        language: ""
    })
    const [skill1, setSkill1] = useState({
        type: "",
        level: ""
    })
    const [skill2, setSkill2] = useState({
        type: "",
        level: ""
    })
    const [skill3, setSkill3] = useState({
        type: "",
        level: ""
    })

    const [inputValue, setInputValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: 0,
        major: "",
        objective: "",
    })

    const handleChangeEducation = (event) => {
        setEducation({
            ...education,
            [event.target.name]: event.target.value
        })
    }

    const handleChangeEducation1 = (event) => {
        setEducation1({
            ...education1,
            [event.target.name]: event.target.value
        })
    }

    const handleChangeExperience = (event) => {
        setExperience({
            ...experience,
            [event.target.name]: event.target.value
        })
    }

    const handleChangeExperience1 = (event) => {
        setExperience1({
            ...experience1,
            [event.target.name]: event.target.value
        })
    }

    const handleChangeCertificate = (event) => {
        setCertificate({
            ...certificate,
            [event.target.name]: event.target.value
        })
    }

    const handleChangeSkill1 = (event) => {
        setSkill1({
            ...skill1,
            [event.target.name]: event.target.value
        })
    }

    const handleChangeSkill2 = (event) => {
        setSkill2({
            ...skill2,
            [event.target.name]: event.target.value
        })
    }

    const handleChangeSkill3 = (event) => {
        setSkill3({
            ...skill3,
            [event.target.name]: event.target.value
        })
    }


    const handleChangeInput = (event) => {
        setInputValue({
            ...inputValue,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (inputValue.firstName && inputValue.lastName && inputValue.email && inputValue.address && inputValue.phoneNumber && inputValue.major && education.start && education.graduated && education.school) {
            const profile = {
                fisrtName: inputValue.firstName,
                lastName: inputValue.lastName,
                email: inputValue.email,
                addrress: inputValue.address,
                phoneNumber: inputValue.phoneNumber,
                major: inputValue.major,
                objective: inputValue.objective,
                education: education,
                education1: education1,
                experience: experience,
                experience1: experience1,
                certificate: certificate,
                skill1: skill1,
                skill2: skill2,
                skill3: skill3,
            }
            axiosInstance.post("/profile" , profile)
            setIsFormFillUp(true)
        }

        setValidated(true);
    };


      console.log(inputValue.email)
    return (
        <div style = {{backgroundImage: "url(" + "./image/hi.jpg" + ")" , 
        marginTop: -30}}> {isFormFillUp ? <div style = {{marginTop : 100}}>You have done it, onClick

            <Link to="/profile" params={{ email: inputValue.email }}>here</Link>to see your profile</div> 
           
           
           : <div className="container">

            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <div className="title" style = {{paddingTop: 60}}>COMPLETE YOUR <span style={{ fontWeight: "bold" }}>RESUME HEADING</span></div>
                <div className="underTitle">Employers will use this information to contact you.</div>

                {/* ngan cachhhhh */}
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            value={inputValue.firstName}
                            onChange={handleChangeInput}
                            name="firstName"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            value={inputValue.lastName}
                            onChange={handleChangeInput}
                            name="lastName"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="Email"
                                placeholder="Email"
                                aria-describedby="inputGroupPrepend"
                                required
                                value={inputValue.email}
                                onChange={handleChangeInput}
                                name="email"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
              </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                {/* ngan cachhh  */}

                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" required value={inputValue.address} onChange={handleChangeInput} name="address" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid address.
            </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Phone number" required value={inputValue.phoneNumber} onChange={handleChangeInput} name="phoneNumber" />
                        <Form.Control.Feedback type="invalid">
                            Your phone number.
            </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Major</Form.Label>
                        <Form.Control type="text" placeholder="Major" required value={inputValue.major} onChange={handleChangeInput} name="major" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid major.
            </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                {/* Ngan cachhh */}

                <div className="title" style={{ fontWeight: "bold" }}>Objective</div>
                <Form.Group>
                    <textarea className="inputTag" placeholder="" value={inputValue.objective} onChange={handleChangeInput} name="objective"></textarea>
                </Form.Group>

                {/* Ngan cachh */}

                <div className="title" style={{ fontWeight: "bold" }}>Education</div>

                <Form.Row>
                    <Form.Group style={{ marginRight: 20 }}>
                        <Form.Label>Start</Form.Label>
                        <Form.Control type="month" placeholder="Normal text" required value={education.start} onChange={handleChangeEducation} name="start" />
                        <Form.Label style = {{marginTop: 10}}>Graduated</Form.Label>
                        <Form.Control  type="month" placeholder="Normal text" value={education.graduated} onChange={handleChangeEducation} required name="graduated" />
                    </Form.Group>
                    {/* <Form.Group style={{ marginRight: 20 }}>
                       
                    </Form.Group> */}

                    <Form.Group style={{ flexGrow: 1 }}>
                        <Form.Label>College / University</Form.Label>
                        <Form.Control type="text" placeholder="" value={education.school} onChange={handleChangeEducation} required name="school" />
                        <Form.Label style = {{marginTop: 10}}>Majors in school</Form.Label>
                        <Form.Control type="text" placeholder="" value={education.majors} onChange={handleChangeEducation} required name="majors" />
                    </Form.Group>
                </Form.Row>
                {/* Ngan cachh */}

                <Form.Row>
                    <Form.Group style={{ marginRight: 20 , marginTop: 45 }}>
                        <Form.Label>Start</Form.Label>
                        <Form.Control type="month" placeholder="Normal text"  value={education1.start} onChange={handleChangeEducation1} name="start" />
                        <Form.Label style = {{marginTop: 10}}>Graduated</Form.Label>
                        <Form.Control  type="month" placeholder="Normal text" value={education1.graduated} onChange={handleChangeEducation1} name="graduated" />
                    </Form.Group>
                    {/* <Form.Group style={{ marginRight: 20 }}>
                       
                    </Form.Group> */}

                    <Form.Group style={{ flexGrow: 1 , marginTop: 45 }}>
                        <Form.Label>College / University</Form.Label>
                        <Form.Control type="text" placeholder="" value={education1.school} onChange={handleChangeEducation1}  name="school" />
                        <Form.Label style = {{marginTop: 10}}>Majors in school</Form.Label>
                        <Form.Control type="text" placeholder="" value={education1.majors} onChange={handleChangeEducation1}  name="majors" />
                    </Form.Group>
                </Form.Row>

                {/* Ngan cachh   */}

                <div className="title" style={{ fontWeight: "bold" }}>Experience</div>

                <Form.Row>
                    <Form.Group style={{ marginRight: 20 }}>
                        <Form.Label>Start</Form.Label>
                        <Form.Control type="month" placeholder="Normal text" value={experience.start} onChange={handleChangeExperience} name="start" />
                        <Form.Label>Ended</Form.Label>
                        <Form.Control type="month" placeholder="Normal text" value={experience.end} onChange={handleChangeExperience} name="end" />
                    </Form.Group>
                    <Form.Group style={{ flexGrow: 1 }}>
                        <textarea  className="inputTag" placeholder="" value={experience.text} onChange={handleChangeExperience} name="text"></textarea>
                    </Form.Group>
                </Form.Row>

                {/* ngan cachh */}

                <Form.Row style = {{marginTop : 35}}>
                    <Form.Group style={{ marginRight: 20 }}>
                        <Form.Label>Start</Form.Label>
                        <Form.Control type="month" placeholder="Normal text" value={experience1.start} onChange={handleChangeExperience1} name="start" />
                        <Form.Label>Ended</Form.Label>
                        <Form.Control type="month" placeholder="Normal text" value={experience1.end} onChange={handleChangeExperience1} name="end" />
                    </Form.Group>
                    <Form.Group style={{ flexGrow: 1 }}>
                        <textarea  className="inputTag" placeholder="" value={experience1.text} onChange={handleChangeExperience1} name="text"></textarea>
                    </Form.Group>
                </Form.Row>


                {/* Ngan cachhhh */}


                <div className="title" style={{ fontWeight: "bold" }}>Certificate</div>
                <Form.Row style={{ justifyContent: "space-around" }}>
                    <Form.Group style={{ width: "35%" }}>
                        <Form.Label>Specialized certificate</Form.Label>
                        <textarea className="inputTagg" required value={certificate.specialized} onChange={handleChangeCertificate} name="specialized"></textarea>
                    </Form.Group>
                    <Form.Group style={{ width: "35%" }}>
                        <Form.Label>Language Certificate</Form.Label>
                        <textarea className="inputTagg" required value={certificate.language} onChange={handleChangeCertificate} name="language"></textarea>
                    </Form.Group>
                </Form.Row>

                {/* Ngan cachhh */}

                <div className="title" style={{ fontWeight: "bold" }}>Skills</div>
                <div className="underTitle">Highlight 2-3 of your top skills.</div>



                <Form.Row style={{ justifyContent: "space-between" }}>
                    <Form.Group as={Col} md="5" controlId="validationCustom06">
                        <Form.Label>Skill</Form.Label>
                        <Form.Control type="text" placeholder="" name="type" value={skill1.type} onChange={handleChangeSkill1} />
                    </Form.Group>
                    <Form.Group as={Col} md="5" controlId="validationCustom07">
                        <Form.Label>Level</Form.Label>
                        <Form.Control as="select" name="level" value={skill1.level} onChange={handleChangeSkill1} >
                            <option value="1">★ ☆ ☆ ☆ ☆ – Novice</option>
                            <option value="2">★ ★ ☆ ☆ ☆ – Beginner</option>
                            <option value="3">★ ★ ★ ☆ ☆ – Skillful</option>
                            <option value="4">★ ★ ★ ★ ☆ – Experienced</option>
                            <option value="5">★ ★ ★ ★ ★ – Expert</option>
                            <option value="0">Don't show level</option>
                        </Form.Control>
                    </Form.Group>

                </Form.Row>

                <Form.Row style={{ justifyContent: "space-between" }}>
                    <Form.Group as={Col} md="5" controlId="validationCustom06">
                        <Form.Label>Skill</Form.Label>
                        <Form.Control type="text" placeholder="" name="type" value={skill2.type} onChange={handleChangeSkill2} />
                    </Form.Group>
                    <Form.Group as={Col} md="5" controlId="validationCustom07">
                        <Form.Label>Level</Form.Label>
                        <Form.Control as="select" value={skill2.level} name="level" onChange={handleChangeSkill2}>
                            <option value="1">★ ☆ ☆ ☆ ☆ – Novice</option>
                            <option value="2">★ ★ ☆ ☆ ☆ – Beginner</option>
                            <option value="3">★ ★ ★ ☆ ☆ – Skillful</option>
                            <option value="4">★ ★ ★ ★ ☆ – Experienced</option>
                            <option value="5">★ ★ ★ ★ ★ – Expert</option>
                            <option value="0">Don't show level</option>
                        </Form.Control>
                    </Form.Group>

                </Form.Row>



                <Form.Row style={{ justifyContent: "space-between" }}>
                    <Form.Group as={Col} md="5" controlId="validationCustom06">
                        <Form.Label>Skill</Form.Label>
                        <Form.Control type="text" placeholder="" value={skill3.type} name="type" onChange={handleChangeSkill3} />
                    </Form.Group>
                    <Form.Group as={Col} md="5" controlId="validationCustom07">
                        <Form.Label>Level</Form.Label>
                        <Form.Control as="select" value={skill3.level} name="level" onChange={handleChangeSkill3} >
                            <option value="1">★ ☆ ☆ ☆ ☆ – Novice</option>
                            <option value="2">★ ★ ☆ ☆ ☆ – Beginner</option>
                            <option value="3">★ ★ ★ ☆ ☆ – Skillful</option>
                            <option value="4">★ ★ ★ ★ ☆ – Experienced</option>
                            <option value="5">★ ★ ★ ★ ★ – Expert</option>
                            <option value="0">Don't show level</option>
                        </Form.Control>
                    </Form.Group>

                </Form.Row>

                {/* Ngan cachhh */}


                <Form.Group>
                    <Form.Check
                        required
                        label="I'm sure that's all my true information"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>

                <Button type="submit">Submit form</Button>
            </Form>

        </div>}</div>


    );
}


