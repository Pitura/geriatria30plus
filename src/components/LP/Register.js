import React, {useState} from 'react';
import {Button, Card} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app, db } from '../../firebase-config';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import {useNavigate} from "react-router-dom";

function Register() {

    const [gender, setGender] = useState('');
    const [birth, setBirth] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const auth = getAuth(app);

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, 'users', res.user.uid), {
                name: name,
                lastName: lastName,
                gender: gender,
                birth: birth,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                tests: [],
                timeStamp: serverTimestamp(),
            })
        } catch (err) {
            console.log(err);
        }
        navigate('/')
    }

    return (
        <>
            <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '80vh'}}>
                <Card className='w-100' style={{maxWidth:'650px'}}>
                    <Card.Body>
                        <h2 className="text-center mb-4">Rejestracja</h2>
                        <h5 style={{color:'red', textAlign:'center'}}>Proszę nie używać swoich regularnych maili lub haseł!</h5>
                        <form className='row g-3' onSubmit={signUp}>
                            <div className='col-md-12'>
                                <label htmlFor="firstName" className='form-label'>Imię</label>
                                <input onChange={e => {setName(e.target.value)}}  type="text" className='form-control' id='firstName' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='lastName' className='form-label'>Nazwisko</label>
                                <input onChange={e => {setLastName(e.target.value)}} type="text" className='form-control' id='lastName' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='gender' className='form-label'>Płeć</label>
                                <select className='form-select' aria-label="Default select example" id='gender' onChange={e => {setGender(e.target.value)}}>
                                    <option value=''></option>
                                    <option value='Kobieta'>Kobieta</option>
                                    <option value='Mężczyzna'>Mężczyzna</option>
                                    <option value='Inna'>Inna</option>
                                </select>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='email' className='form-label'>E-mail</label>
                                <input onChange={e => {setEmail(e.target.value)}} type="email" className='form-control' id='email' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='password' className='form-label'>Hasło</label>
                                <input onChange={e => {setPassword(e.target.value)}} type="password" className='form-control' id='password' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='phoneNumber' className='form-label'>Telefon</label>
                                <input onChange={e => {setPhoneNumber(e.target.value)}} type="text" className='form-control' id='phoneNumber'/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='birthDate' className='form-label'>Data urodzenia</label>
                                <input onChange={e => {setBirth(e.target.value)}} type="date" className='form-control' id='birthDate' data-provide="datepicker"/>
                            </div>
                            <Button type='submit' className='mt-4 float-end btn-lg w-100'>Zarejestruj</Button>
                        </form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
// controlId="date" data-provide="datepicker"
export default Register;
