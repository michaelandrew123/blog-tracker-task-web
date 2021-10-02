import React, {useEffect} from 'react'
import {connect } from 'react-redux'
import {fetchUsers} from './Redux/Users/userActions'

const UserContainer = ({dataUser, fetchUsers}) => {

    useEffect(() => {
        fetchUsers();
    }, [])

    console.log(dataUser);


    return (
        <>
            <div>
                Hellow Word
            </div>
        </>
    );
    // return dataUser.loading ?  (
    //     <div>
    //         <h2>
    //             Loading
    //         </h2>
    //     </div>
    // ) :  dataUser.error ? 
    //     (
    //     <div>
    //         <h2>{dataUser.error}</h2> 
    //     </div>
    //     )
    // : ( 
    //     <div>
    //         <h2>User List</h2>
    //         <div>
    //             {
    //                 dataUser && dataUser.users && dataUser.users.map(user => (
    //                     <p key={user.id}>{user.name}</p>    
    //                 ))
    //             }    
    //         </div> 
    //     </div>
    // );
}

const mapStateToProps = state => {
    return {
        dataUser: state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchUsers: ()=>dispatch(fetchUsers())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);