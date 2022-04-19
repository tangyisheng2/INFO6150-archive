function CurrentUser({ name }) {
    if (name) {
        return <div className="current-user">Welcome back {name}</div>;
    }
    return <div className="current-user"></div>;
}
export default CurrentUser;
