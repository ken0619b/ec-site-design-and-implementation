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
      color: #3E3E3E;
    }
    .sentence {
      font-weight: 200;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 30px;
      letter-spacing: 0.05em;
      color: #A9A9A9;
    }
  }
`;

const Story = () => {
  return (
    <StoryContainer>
      <img src={`${process.env.PUBLIC_URL}/image.png`} alt="ec site" />
      <div className="content">
        <div className="title">Our Story</div>
        <div className="sentence">
          In the early 1960s at Tokyo’s Bridgestone Museum of Art, curator Hideo
          Matsushita hosted LP listening concerts, where people would experience
          vinyl records played on high-quality audio equipment. Matsushita was
          moved by the positive reactions guests had to the music, but was
          frustrated that the expense of high-fidelity listening prevented many
          people from experiencing it.
        </div>
        <div className="title">Founded in 1962</div>
        <div className="sentence">
          In 1962, Matsushita founded Forest Audio with the vision of producing
          high-quality audio for everyone. And following this vision, he soon
          created the first truly affordable phono cartridge, the AT-1, in the
          company’s small flat in Shinjuku, Tokyo.
        </div>
        <div className="title">A Passion for Listening</div>
        <div className="sentence">
          Building on our passion for listening we have grown to design
          critically acclaimed headphones, turntables and microphones, remaining
          a family business and retaining the belief that high-quality audio
          should be accessible to all.
        </div>
      </div>
    </StoryContainer>
  );
};

export default Story;
