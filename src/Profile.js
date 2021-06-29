const Profile = ({ user }) => {
    const { email } = user
    return (
        <div className="Profile">
            <h1>{email}</h1>
        </div>
    )
}
export default Profile