import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';



class PostsNew extends React.Component{
    renderField(field){
        const {meta : {touched, error}}=field; //ES6 syntax destructuring
        const className=`form-grop ${touched && error ? 'has-danger' : '' }`


        return(
            <div className={className}>
                <label>{field.label}</label>
                <input 
                className="form-control"
                {...field.input} // the same as onChange={field.input.onChage} onFocus...etc
                                // It makes same atributes with same name the same ;)
                type="text"
                />
                <div className="text-help"> 
                {touched ? error:""}
                </div>
            </div>
        )
    }
    onSubmit(values){
        //this === component
        //console.log(values);
        
        this.props.createPost(values, ()=>{ //callback function
            this.props.history.push('/');
        });
    }
    render()
    {   const { handleSubmit } = this.props;
        
    return(
           
            
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                <Field 
                label="Title"
                    name="title"
                    component={this.renderField} //takes function which returns JSX
                    

                />
                <Field
                label="Categories"
                    name="categories"
                    component={this.renderField} 
                />
                <Field
                label="Post Content"
                name="content"
                component={this.renderField}
                />
            
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/' className="btn btn-danger">Cancel</Link>
            </form>
          
        );
    }
}

function validate(values){
    //console.log(values)->{title:, categories:,contnet:,}
    const errors={};
    //Validate the inputs from values
    if(!values.title || values.title.length <3){ //Check if title is not empty
        errors.title="Enter a title that is at least 3 characters!";
    }
    if(!values.categories){ //Check if catego is not empty
        errors.categories="Enter a categories!";
    }
    if(!values.content){ //Check if content is not empty
        errors.content="Enter a content!";
    }



    //if errors is empty, the form is fine to submit
    //if errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate, // validate : validate FUNCTION etc...
    form: 'PostsNewForm' })(
        connect(null,{createPost })(PostsNew)
    );   //Multiplay connect like helpers for Redux