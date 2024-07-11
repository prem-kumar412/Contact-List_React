/** ------------ IMPORTING CSS ------------ **/
import Style from "./edit.module.css";
/** ------------ IMPORTING ROUTER DEPENDENCIES------------ **/
import {Link, useParams, useNavigate} from "react-router-dom";
/** ------------ IMPORTING CONTEXT HOOKS ------------ **/
import {useValue} from "../../Context/context";
/** ------------ IMPORTING TOAST ------------ **/
import {toast} from 'react-toastify';



function Edit() {

    const {contactList, setContactList,
            nameRef, emailRef, numberRef, 
            handleClear} = useValue();
    const param = useParams();
    const currentContact = contactList.find(contact => contact.id === parseInt(param.id));
    const navigate = useNavigate();

/** ------------ Function to update contact ------------ **/
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const number = numberRef.current.value;

        if (name === currentContact.name && email === currentContact.email && number === currentContact.phone) {
            toast.info("Contact Unchanged.");
        } else {
            const updatedContact = {
                ...currentContact,
                name, email, phone: number
            }
            const updatedList = contactList.map(contact => {
                if(contact.id === currentContact.id) {
                    return updatedContact;
                }
                return contact;
            });
            toast.success("Contact Updated Successfully!");
            setContactList(updatedList);
        }
        navigate('/');  
        handleClear();
    }



    return (
        <div className={Style.container}>
            <p className={Style.title}>Edit Contact</p>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={currentContact.name} placeholder="Name" ref={nameRef} required/>
                <input type="email" defaultValue={currentContact.email} placeholder="Email" ref={emailRef} required/>
                <input type="tel" defaultValue={currentContact.phone} placeholder="Phone number" ref={numberRef} required/>
                <button type="submit" className={Style.save_btn} >Save</button>
                <Link to="/" className={Style.cnl_btn}>Cancel</Link>
            </form>
        </div>
    )
}



/** ------------ EXPORTING MODULES ------------ **/
export default Edit;