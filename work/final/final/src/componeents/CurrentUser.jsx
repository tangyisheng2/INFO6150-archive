import '../css/current-user.css'
function CurrentUser({ user }) {
    const name = user['name'];
    if (name) {
        return <div className="current-user"><p>Welcome back {name}</p></div>;
    }
    return <div className="current-user"></div>;
}
export default CurrentUser;
