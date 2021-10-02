import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from './redux/user/userActions';

const UserContainer = ({userData, fetchUsers}) => {
    useEffect(()=>{
        fetchUsers()
    }, [])
    return userData.loading ? (
        <div>
            <h2>Loading</h2> 
        </div>
    ) : userData.error ? (
        <div>
            <h2>{userData.error}</h2> 
        </div>
    ) : (
        <div>
            <h2>User List</h2>
            <div>
                {
                    userData && userData.users && userData.users.map(user => (
                        <p key={user.id}>{user.name}</p>    
                    ))
                }    
            </div> 
        </div>
    )

}

const mapStateToProps = state => {
    return {
        userData: state.user
    }

}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: ()=> dispatch(fetchUsers())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);