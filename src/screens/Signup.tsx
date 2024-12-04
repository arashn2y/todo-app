import {useEffect, useState} from 'react';
import Header from '../components/sections/Header';
import Input from '../components/custom/Input';
import Label from '../components/custom/Label';
import Checkbox from '../components/custom/Checkbox';
import Button from '../components/custom/Button';

const Signup = () => {
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [agreementCheck, setAgreementCheck] = useState<boolean>(false);
    const [disableSubmit, setDisableSubmit] = useState<boolean>(true);

    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    useEffect(()=>{
        setDisableSubmit(!(
            name.length >= 1 && 
            surname.length >= 1 && 
            validateEmail(email) &&
            password.trim().length >= 4 &&
            password.trim() === confirmPassword &&
            agreementCheck
        ));
    },[name, surname, email, password, confirmPassword, agreementCheck]);

    return (
    <div>
        <Header title='Signup' />
        <main className='mt-10 flex sm:flex-col sm:items-center md:flex-row gap-4 justify-between items-start w-4/6 max-w-[500px] mx-auto relative'>
            <form onSubmit={event => event.preventDefault()} id="signup" className="signup flex flex-col shadow-[0_12px_20px_rgba(100,100,100,_0.3)] space-y-8 p-6 border-2 rounded-xl w-full">
                <div className="flex flex-col space-y-2">
                    <Label title='Name:' />
                    <Input placeholder='Insert name' value={name} setValue={setName} isRequired={true} />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label title='Surname:' />
                    <Input placeholder='Insert surname' value={surname} setValue={setSurname} isRequired={true} />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label title='Email:' />
                    <Input placeholder='Insert email' value={email} setValue={setEmail} type='email' isRequired={true} />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label title='Password:' />
                    <Input placeholder='Insert new password' value={password} setValue={setPassword} type='password' isRequired={true} />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label title='Retype password:' />
                    <Input placeholder='Repeat new password' value={confirmPassword} setValue={setConfirmPassword} type='password' isRequired={true} />
                </div>
                <div className='flex'>
                    <Checkbox currentValue={agreementCheck} onCheckboxChange={setAgreementCheck} isRequired={true} className='me-8' />
                    <Label title='I hearby give consent to the treatment of my personal data.' />
                </div>
                <Button 
                    title='Signup' 
                    disabled={disableSubmit}
                    onClick={()=>{console.log('Submit button clicked');
                    }}
                />
            </form>
        </main>
    </div>
    )
}

export default Signup;