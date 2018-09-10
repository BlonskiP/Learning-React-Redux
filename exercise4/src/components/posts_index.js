import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'; 
import {fetchPosts} from '../actions';
import _ from 'lodash'
class PostsIndex extends React.Component{

    componentDidMount(){ //React calls it when component apears inside DOM
        this.props.fetchPosts(); //download data from api
    }
    renderPosts(){
       return  _.map(this.props.posts, posts =>{
            return (
                <li className="list-group-item" key={posts.id}>
                <Link to={`/posts/${posts.id}`}>
                {posts.title}
                </Link>
                </li>
            );
        });
    }
    render(){
       // console.log(this.props.posts)
        return(
            <div>
                <div className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new">
                Add a Post
                </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-grop">
                {this.renderPosts()}
                </ul>
            </div>
        )
    }

}
function mapStateToProps(state){
    return {posts: state.posts};
}

// SHORTER VERSION OF connect! -> fetchPosts: fetchPosts -> {fetchPosts}
// Instead of mapDispatchToProps is fetchPosts: fetchPosts SHORTER!
export default connect(mapStateToProps,{fetchPosts})(PostsIndex);