class User extends React.Component {

  render(){

    if (this.props.user){
      // user is authenticated
      return <div>
          <h5>Hello {this.props.user.displayName}!</h5>
          <pre>{JSON.stringify(this.props.user)}</pre>
          <a href="#" onClick={this.props.logoutAction}>Logout</a>
      </div>
    } else {
      // user is not set
      return <div>
        <h5>You are not logged in yet.</h5>
        <a href="#" onClick={this.props.loginAction}>Login via Github</a>
      </div>
    }
  }

}
MyComponents.User = User
