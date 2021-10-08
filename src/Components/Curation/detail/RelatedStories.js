import React, { Fragment } from 'react';
import styled from 'styled-components';
import ShadowedContainer from './ShadowedContainer';

const RelatedStories = ({ stories }) => {
  return (
    <Fragment>
      <h2>Related Stories</h2>
      <StoryContainer>
        {stories.map((story) => {
          return <StoryItem story={story} />;
        })}
      </StoryContainer>
    </Fragment>
  );
};

const StoryItem = ({ story }) => {
  const { thumbnail, author } = story;
  return (
    <StoryItemContainer>
      <StoryThumbnail src={thumbnail} />
      <StoryAuthor>{`@${author}`}</StoryAuthor>
    </StoryItemContainer>
  );
};

const StoryContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-y: scroll;
  gap: 1rem;
`;

const StoryItemContainer = styled(ShadowedContainer)`
  width: 11rem;
  height: 13rem;
  padding: 1rem;
`;

const StoryThumbnail = styled.img`
  width: 9rem;
  height: 9rem;
`;

const StoryAuthor = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`;

export default RelatedStories;
