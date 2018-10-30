import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {

    },
    textBox: {
        textAlign: "center"
    },
    Btn: {
        width: "50%",
        minHeight: "100px",
        backgroundColor: "white",
        border: "4px solid grey",
        borderRadius: "30px",
        fontSize: "24px",
        lineHeight: "34px" 
    },

});


class Home extends Component {
    state = {
        redirect: false,
        subtitle: ""
    }

    componentDidMount() {
       
    }

    handleNav(choice){
        console.log("redirect to user info: ", choice)
        switch (choice) {
            case "1": 
            // save choice in store
                break ;
            case "2": 
            // save choice in store
                break ;
            case "3": 
            //save choice in store
                break ;
            default:
            // save 'both' as choice in store
        }
        this.setState({
            redirect : true
        })
        
    } 
    
    render() {
        const { classes } = this.props;
        const { redirect, subtitle } = this.state;

        if (redirect) { 
            const url = `/user_info`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }

        return (
            <React.Fragment>
                <div className={classes.textBox}> 

                    <div style={{marginTop: "100px"}}> 
                        <h2>What are you most interested in?</h2>
                    </div>

                
                    <div style={{marginTop: "100px"}}>
                        <Button variant='contained' className={classes.Btn} onClick={() => this.handleNav(1)}>
                            Up to date treatments for Parkinson's disease
                        </Button>
                    </div>

                    <div style={{marginTop: "100px"}}>
                        <Button variant='contained' className={classes.Btn} onClick={() => this.handleNav(2)}>
                            Clinical trials for new Parkinson's disease treatments
                        </Button>
                    </div>

                    <div style={{marginTop: "100px"}}>
                        <Button variant='contained' className={classes.Btn} onClick={() => this.handleNav(3)}>
                            Treatments and trials
                        </Button>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    console.log("state in homepage : ", state);
    return state;
};

Home = connect(mapStateToProps)(Home)
Home = withStyles(styles)(Home)
export default Home;