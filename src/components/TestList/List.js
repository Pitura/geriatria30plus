import React from 'react';
// import {db} from '../../firebase-config';
// import { collection, getDocs } from 'firebase/firestore';

function List() {

    // const [users, setUsers] = useState([]);
    // const usersCollectionRef = collection(db, 'users');
    //
    // useEffect( () => {
    //
    //     const getUsers = async () => {
    //
    //         const data = await getDocs(usersCollectionRef);
    //         setUsers(data.docs.map( doc => ({...doc.data(), id: doc.id}) ))
    //
    //     };
    //
    //     getUsers();
    //
    // }, []);

    return (
        <div>temp</div>
        // <div className='container'>{users.map( (user, index) => {
        //     return <div key={index}>
        //                 <h3>Name: {user.name}</h3>
        //                 <h3>Surname: {user.surname}</h3>
        //                 <h3>Password: {user.password}</h3>
        //                 <h3>Email: {user.email}</h3>
        //                 <h3>Phone: {user.phone}</h3>
        //     </div>
        // })}</div>
    )
}

export default List;
