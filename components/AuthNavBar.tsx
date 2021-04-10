import React from 'react'
// import history from '../../buda/src/utils/history'
import {useAuth0} from '../react-auth0-spa'

const AuthNavBar = () => {
    const {
        isAuthenticated,
        loginWithRedirect,
        logout,
        loading,
        user,
    } = useAuth0()

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="ml-4">
            {!isAuthenticated && (
                <div
                    onClick={() => {
                        // loginWithRedirect(history.location)
                    }}
                >
                    Log in
                </div>
            )}
            {isAuthenticated && (
                <div style={{ lineHeight: '15px' }} onClick={() => logout()}>
                    {user.bdrcID && (
                        <span
                            style={{ fontSize: '12px', verticalAlign: '6px' }}
                        >
                            {/* user.email */}
                            {user.bdrcID}
                        </span>
                    )}
                    <br />
                    Log out
                </div>
            )}
        </div>
    )
}

export default AuthNavBar
