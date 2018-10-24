import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Grid } from "semantic-ui-react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        fontSize: 500
      }
    }
  }
});

const styles = theme => ({
  card: {
    maxWidth: 350
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

class Result extends Component {
  state = {
    expanded: false,
    isFavorited: false
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleFavorite = event => {
    console.log(this.props.recipe);
    const ingredients = this.props.recipe.ingredients.map(
      ingredient => ingredient.text
    );
    fetch(`http://localhost:3001/users/1/recipes`, {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        user_id: 1, //fix user id to 1,recipes from api
        name: this.props.recipe.label,
        image: this.props.recipe.image,
        calories: Number(this.props.recipe.calories),
        cooking_time: Number(this.props.recipe.cooking_time),
        ingredients: ingredients
      })
    })
      .then(res => res.json())
      .then(newRecipe => {
        fetch(
          `http://localhost:3001/users/${
            this.props.currentUser.id
          }/collections`,
          {
            method: "POST",
            headers: {
              Accept: "Application/json",
              "Content-Type": "Application/json"
            },
            body: JSON.stringify({
              collector_id: this.props.currentUser.id,
              recipe_id: newRecipe.id
            })
          }
        )
          .then(response => response.json())
          .then(console.log);
        this.setState({
          isFavorited: true
        });
      });
  };
  render() {
    console.log(this.props.recipe);
    console.log(this.props.currentUser);

    const { classes } = this.props;
    return (
      <Grid.Column>
        <Card style={{ background: "#4d9dd6" }}>
          <MuiThemeProvider theme={theme}>
            <div className="addPadding">
              {this.props.recipe.label.charAt(0).toUpperCase() +
                this.props.recipe.label.slice(1)}
            </div>
          </MuiThemeProvider>
          <CardMedia
            className={classes.media}
            image={this.props.recipe.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p" style={{ color: "white" }}>
              Health Labels: {this.props.recipe.healthLabels.join(", ")}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              aria-label="Add to favorites"
              onClick={this.handleFavorite}
              style={this.state.isFavorited ? { color: "#FFD1DC" } : null}
            >
              <FavoriteIcon />
            </IconButton>

            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography style={{ color: "white" }}>Ingredients:</Typography>
              <Typography style={{ color: "white" }}>
                {this.props.recipe.ingredients
                  .map(ingredient => {
                    return ingredient.text;
                  })
                  .join(", ")}
              </Typography>
              <Typography>
                <div style={{ color: "white" }}>
                  <a href={this.props.recipe.url} target="_blank">
                    Recipe Instructions
                  </a>
                </div>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid.Column>
    );
  }
}

Result.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(state => ({ currentUser: state.currentUser }))(
  withStyles(styles)(Result)
);
