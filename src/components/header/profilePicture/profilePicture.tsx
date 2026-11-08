import {Link } from 'react-router'


export default function ProfilePicture(){
    return <>
    <Link to="/profile" className="profile-avatar">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="User Profile"
              />
            </Link>
    
    </>
}