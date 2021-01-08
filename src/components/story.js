import styled from "styled-components";

const StoryContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .content {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 26px;
    .title {
      font-size: 36px;
      line-height: 20px;
      margin-bottom: 10px;
      letter-spacing: 0.03em;
      color: #3e3e3e;
    }
    .sentence {
      font-weight: 200;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 30px;
      letter-spacing: 0.05em;
      color: #a9a9a9;
    }
  }
`;

const Story = () => {
  return (
    <StoryContainer>
      <img src={`${process.env.PUBLIC_URL}/image.png`} alt="ec site" />
      <div className="content">
        <div className="title">Our Brand</div>
        <div className="sentence">
          In the middle of Japan's high economic growth at 1980s, our Forest
          Sound has been established. Forest Sound has a passion. "Listen To The
          Nature..." which aims to coexisting with all lives.
        </div>
        <div className="title">Our Product</div>
        <div className="sentence">
          Our products have been born inspired by many accents of the nature
          (color, taste, smell, etc...).
        </div>
        <div className="title">Our Passion</div>
        <div className="sentence">
          Nature bring people happiness. Forest Sound keeps delivering the good
          parts of it. and/or, Forest Sound wants to show the values 'Less is
          More' which is the anti-thesis of the today's mass consumption era.
        </div>
      </div>
    </StoryContainer>
  );
};

export default Story;
