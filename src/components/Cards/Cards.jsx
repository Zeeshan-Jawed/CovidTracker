import "./Cards.style.css";
import { Typography, Grid,Card,CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';
const Cards = ({data:{confirmed,active,deaths,recovered}}) => {
    const useStyles = makeStyles({
        root: {
            minWidth: 245,
            marginRight: 15,
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();
    if(!active){
        return 'Loading'
    }
    return (

        <div className="container">
            
            <Grid container spacing={2} justify="center">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Confirmed
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp start={0} end={confirmed} duration={2.75} separator="," />
      </Typography>
      
      <Typography variant="body2" component="p">
      Number of confirms from COVID-19.
      </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Active
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp start={0} end={active} duration={2.75} separator="," />
        
      </Typography>
      
      <Typography variant="body2" component="p">
      Number of active from COVID-19.
      </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Recovered
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp start={0} end={recovered} duration={2.75} separator="," />
        
      </Typography>
      
      <Typography variant="body2" component="p">
      Number of recoveries from COVID-19.
      </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Deaths
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp start={0} end={deaths} duration={2.75} separator="," />
        
      </Typography>
      
      <Typography variant="body2" component="p">
      Number of death from COVID-19.
      </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )

}




export default Cards;