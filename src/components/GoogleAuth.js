import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {


    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '135359153540-sf4b0dui6vbr15ra6v519msrk28gcols.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    };


    renderAuthButton() {
        if (this.props.isSignedIn === null)
            return null;
        else if (this.props.isSignedIn === true) {
            return (
                <div>
                    <button onClick={this.auth.signOut} className="ui red google button">
                        <i className="google icon" />
                        Sign Out
                    </button>
                </div>
            );
        }
        else if (this.props.isSignedIn === false) {
            return (
                <div>
                    <button onClick={this.auth.signIn} className="ui red google button">
                        <i className="google icon" />
                        Sign In With Google
                    </button>
                </div>
            );
        }

    }




    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

export default connect( state => {
                                return { isSignedIn: state.auth.isSignedIn };
                                },
    { signIn, signOut })(GoogleAuth); 