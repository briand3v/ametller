import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// pages
import PostList from '../Post/pages/PostList';
import RegisterPage from "../Register/pages/RegisterPage";
import ProfilePage from '../User/pages/ProfilePage'


export default function RootNavigator() {
    return (
        <div style={{ paddingTop: 60, height: 'calc(100vh)' }}>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <PostList />} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/user/:id" component={ProfilePage} />
                </Switch>
            </Router>
        </div>
    )
}

