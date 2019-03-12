import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";
import { withRouter } from "react-router-dom";

// Components
import BookTable from "./BookTable";
import Loading from "./Loading";

class AuthorDetail extends Component {
  componentDidMount() {
    this.props.fetchAuthorDetail(this.props.match.params.authorID);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.authorID !== this.props.match.params.authorID) {
      this.props.fetchAuthorDetail(this.props.match.params.authorID);
    }
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const author = this.props.author;
      const authorName = `${author.first_name} ${author.last_name}`;
      return (
        <div className="author">
          <div>
            <h3>{authorName}</h3>
            <img
              src={author.imageUrl}
              className="img-thumbnail img-fluid"
              alt={authorName}
            />
          </div>
          <BookTable books={author.books} />
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    author: state.authorR.author,
    loading: state.authorR.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllAuthors: () => dispatch(actionCreators.fetchAuthors()),
    fetchAuthorDetail: authorID =>
      dispatch(actionCreators.fetchAuthorDetail(authorID))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthorDetail)
);
