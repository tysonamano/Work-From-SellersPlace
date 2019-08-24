import React from "react";
import { Card, CardText, CardTitle, CardImg } from "reactstrap";
import PropTypes from "prop-types";

const BlogProfileTimelineCard = React.memo(function BlogProfileTimelineCard(
  props
) {
  return (
    <div>
      <Card>
        <CardTitle>
          <h4>Title</h4>
        </CardTitle>
        <CardImg className="img-fluid" src={props.blog.imageUrl} alt="demo" />
        <CardText>
          <p>Body</p>
        </CardText>
        <br />
        <CardText>Created on 01/01/2000</CardText>
      </Card>
    </div>
  );
});

BlogProfileTimelineCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    dateToPublish: PropTypes.string,
    statusId: PropTypes.number,
    dateCreated: PropTypes.string.isRequired,
    dateModified: PropTypes.string,
    createdBy: PropTypes.number
  })
};

export default React.memo(BlogProfileTimelineCard);
