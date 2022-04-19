function CurrentUser({user}) {
    console.log(user)
    const name = user['name'];
    if (name) {
        return <div className="current-user">Welcome back {name}</div>;
    }
    return <div className="current-user"></div>;
}
export default CurrentUser;
