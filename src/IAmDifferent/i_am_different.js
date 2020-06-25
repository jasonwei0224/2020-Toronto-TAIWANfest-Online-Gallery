import React from "react";
import newsletterContactUs from "./newsletterContactUs";
import CardGame from "./cardGame";
import styled from "@emotion/styled";
import different_img from "../assets/Different.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProgramInfo from "../programInfo";
import "./i_am_different.css";
import Header from "../header";
import { Link } from "react-router-dom";
import NewsletterContactUs from "./newsletterContactUs";
import Footer from "../footer-temp";

// function click(){
// FB.ui({
//    display: 'popup',
//    method: 'share',
//    href: 'https://developers.facebook.com/docs/',

function IAmDifferent() {
  const diffForm = <Link to="IAmDifferent"></Link>;
  // let NewsContact = styled.div`
  //   text-align: center;
  //   // background-color: yellow;
  // `;
  let Body = styled.div`
    text-align: center;
  `;
  let GameDiv = styled.div`
    width: 100%;
    // min-height: 250px;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: yellow;
  `;
  return (
    <div>
      <Container fluid>
        <Row>
            <Col lg={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} bsPrefix="image_col">
              <img className="main_image" src={different_img}/>
            </Col>
            {/* <CardGame /> */}
        </Row>
        <ProgramInfo
          subtitle="I'm different, just like you"
          title="WE ARE ALL IN THIS TOGETHER"
          artistName="TAIWANfest"
          url="https://www.facebook.com/sharer/sharer.php?u=https://www.acsea.ca/"
          color="#D9C739"
        ></ProgramInfo>
        <Row>
          {/* <Col lg={{ span: 6, offset: 3 }} xs={{ span: 6, offset: 2 }}> */}
          <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}>
            <p className="instruction_title">About This Work:</p>
          </Col>
        </Row>

        <Row>
          {/* <Col lg={{ span: 6, offset: 3 }} xs={{ span: 6, offset: 2 }}> */}

          <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}>
            <p className="instruction_body">
              {" "}
              <b>“I’m different, just like you! - We are all in this together”</b> is an interactive exhibition piece that grows as people continue to contribute to it.
              Through these most recent difficult times, we have all come to rely on the skills and hard work of the front-line workers who have all come from different backgrounds to serve their communities.
              This piece serves to highlight these essential workers and deliver the message that though we may look different and share varied values, We are all in this together.

            </p>{" "}
          </Col>
        </Row>
        <Row>
          <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}
            style={{ marginTop: "50px", marginBottom: "5%" }}
            className="contents"
          >
            <p>
              {" "}
              Racism has no place in the fight against any pandemic and the consequence of racially motivated actions is perhaps more deadly than the virus because it is human against human.
               The COVID-19 pandemic has proved that the virus sees no boundaries and the potential cure can also come from anywhere to save lives for all.
               Despite coming from a range of backgrounds and looking different, these professionals all do their jobs to work on the problems our world is facing, embodying the message
               <b>“I’m different, just like you!”</b> Everyone should be proud of their differences and the only certainty for the world is that everyone is different regardless of birthplaces, lifestyles, skin colours or languages spoken.

            </p>{" "}

          </Col>
        </Row>
        <Row>
          {/* <Col lg={{ span: 8, offset: 4 }} style={{ marginBottom: "10%" }}> */}
          <Col style={{ marginBottom: "50px"}} xl={{span:5, offset:4}} lg={{span:8, offset:2}}sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
            <Button
              // onClick="handleClick"
              href="#IAmDifferentForm"
              bsPrefix="upload_button" >
              UPLOAD FRONT-LINE HERO PHOTO

              {/* <Link to="/IAmDifferentForm" className="form_link">
                UPLOAD FRONT-LINE HERO PHOTO
              </Link> */}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: "50px" }} xl={{span:4, offset:4}} lg={{span:8, offset:2}}sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
            <Button bsPrefix="share_button" variant="primary" type="submit">SHARE WITH FRIENDS</Button>
          </Col>
        </Row>
      </Container>
      <div
        lg={{ span: 3, offset: 3 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2%",
          alignItems: "center",
        }}
      >
        {/*}<NewsletterContactUs />*/}
      </div>

      {/*}<GameDiv>
        <CardGame />
      </GameDiv>*/}
      <Footer></Footer>
    </div>
  );
}

export default IAmDifferent;
