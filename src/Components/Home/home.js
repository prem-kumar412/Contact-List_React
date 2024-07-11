/** ------------ IMPORTING CSS ------------ **/
import Style from "./home.module.css";
/** ------------ IMPORTING COMPONENTS ------------ **/
import Loader from "../Loader/loader";
/** ------------ IMPORTING ROUTER DEPENDENCIES------------ **/
import {Link} from "react-router-dom";
/** ------------ IMPORTING CONTEXT HOOKS ------------ **/
import {useValue} from "../../Context/context";



function Home() {

    const {contactList, deleteContact, isLoading} = useValue();

    if(isLoading) return <Loader/>

    

    return (
        <div className={Style.container}>
            <table>
                <thead>
                    <tr className={Style.table_head}>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {contactList.map((contact, index)=> (
                    <tr key={index}>
                        <td>{index+1}.</td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <Link to={`edit/${contact.id}`} className={Style.edit_btn}>Edit</Link>
                            <Link onClick={()=>deleteContact(contact.id)} className={Style.dlt_btn}>Delete</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}



/** ------------ EXPORTING MODUKES ------------ **/
export default Home;