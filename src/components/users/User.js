import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import PropType from 'prop-types';
import { pbkdf2 } from 'crypto';

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    static propTypes = {
        loading: PropType.bool,
        user: PropType.object.isRequired,
        getUser: PropType.func.isRequired,
    }
    render() {
        const { name, avatar_url, location, bio, blog, login, html_url, followers,
                following, public_repos, public_gists, hireable} = this.props.user;
        const { loading } = this.props;
        return (
            <div>{name}</div>
        )
    }
}

export default User;
