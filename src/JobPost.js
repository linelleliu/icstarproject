import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';

function JobPost() {
    return (
       <div>
           <Container component="main" maxWidth="xs">
                <div className="container">
                    <h3>DEMATIC</h3>
                    <b>Software Engineer</b>
                    <br/>
                    Location: New Berlin WI, US Posted DatePosted 1 day ago
                    <br/>
                    <a className="link" href="url">Job Description</a>
                </div>
                <div className="container">
                    <h3>Hashi corp</h3>
                    <b>Software Engineer</b>
                    <br/>
                    Location: New Berlin WI, US Posted 1 day ago 
                    <br/>
                    <a className="link" href="url">Job Description</a>
                </div>
                <div className="container">
                    <h3>Northwestern</h3>
                    <b>Software Engineer</b>
                    <br/>
                    Location: New Berlin WI, US Posted Date 05/15/2020 
                    <br/>
                    <a className="link" href="url">Job Description</a>
                </div>
                <div className="container ">
                    <h3>Northwestern</h3>
                    <b>Software Engineer</b>
                    <br/>
                    Location: New Berlin WI, US Posted DatePosted 1 day ago
                    <br/>
                    <a className="link" href="url">Job Description</a>
                </div>
            </Container>
        </div>



    )
};

export default JobPost;