import React,{Component} from 'react';



import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { Twitter, Facebook, Whatsapp } from 'react-social-sharing'
import { sizing } from '@material-ui/system';
import { positions } from '@material-ui/system';
import { display } from '@material-ui/system';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function NewsItem (props){

    // constructor(props){
    //     super(props);
    //     //this.renderObj = this.renderObj.bind(this);

    //     console.log(this.props.article);
    //     this.state=({
    //         arti:[this.props.article],
    //     })
    //     //console.log(this.props.article[0].title);
    //     console.log(this.state.arti);
    // }
    // renderObj = () => { 
    //     Object.keys(this.props.article).map((art, i) => {
    //         console.log(this.props.article[art].title);

    //       return (
    //         <div>
    //           {this.props.article[art].title}
    //         </div>

    //       )})}

    
    
       const classes = useStyles();
                  
          return (
            
        
                Object.keys(props.article).map((art, key) => 
                (
                  <div>
                  
                  <Grid container spacing={6} 
                  direction="column"
                  alignItems="center"
                  justify="center"
                  
                  >
                  <Grid item xs={15}>
                     <Card className={classes.card} style={{display:"block", }}>
                   
                        <CardActionArea >
                          <CardMedia 
                          style={{display: "block", }}
                            component="img"
                            alt= {props.article[art].title}
                            height="140"
                            image=  {props.article[art].urlToImage}
                            title=  {props.article[art].title}
                            
                        />
    
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            <div style={{fontSize: '15px',fontFamily: 'Rajdhani', fontWeight:'bold'}} >
                            {props.article[art].content}
                            </div>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            <Twitter solid small  link={props.article[art].url}/>
                            </Button>
                            <Facebook solid small link={props.article[art].url} />
                            <Whatsapp solid small link= {props.article[art].url}/>

                            <Button variant="outlined" color="primary" href={props.article[art].url}  target="_blank">
                                Get me there
                            </Button>
                        </CardActions>
                        
                        </Card>   
                        </Grid>
                        </Grid>
                        
                    </div>  
                 ))
          
          )
        
        }
            
        
    
    
export default NewsItem;


