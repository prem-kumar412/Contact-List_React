/** ------------ IMPORTING CSS ------------ **/
import Style from "./add.module.css";
/** ------------ IMPORTING CONTEXT HOOKS ------------ **/
import {useValue} from "../../Context/context";
/** ------------ IMPORTING ROUTER DEPENDENCIES------------ **/
import {useNavigate} from 'react-router-dom';
/** ------------ IMPORTING TOAST ------------ **/
import {toast} from 'react-toastify';


function Add() {

    const {contactList, setContactList,
            nameRef, emailRef, numberRef,
            handleClear} = useValue();
    const navigate = useNavigate();

/** ------------ Function to create contact ------------ **/
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const number = numberRef.current.value;

        const isPresent = contactList.find(contact => contact.phone === number)
        if(isPresent) {
            toast.info("Contact Exists!");
        } else {
            const newContactList = [...contactList];
            newContactList.push({
                id: contactList[contactList.length-1].id +1,
                name, email, phone:number
            });
            toast.success("Contact Added Successfully!");
            setContactList(newContactList);
        }
        navigate('/');
        handleClear();
    }



    return (
        <div className={Style.container}>
            <p className={Style.title}>Add Contact</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" ref={nameRef} required/>
                <input type="email" placeholder="Email" ref={emailRef} required/>
                <input type="tel" placeholder="Phone number" ref={numberRef} required/>
                <button type="submit" className={Style.save_btn} >Save</button>
                <button type="reset" className={Style.cnl_btn}>Reset</button>
            </form>
        </div>
    )
}



/** ------------ EXPORTING MODULES ------------ **/
export default Add;