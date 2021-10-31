import React from "react";
import "./Resources.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import exit from "../../exit.png";


export default function Resources() {
  return <div id="resourcePage">
    <div id="resource">
    Resources
    </div>
    <div>
    <Container>
      <Row>
        <Col id="article">Articles
        <ul>
          <br/>
           <li> <a 
            id="article1"
            href="https://www.nerdwallet.com/article/investing/cryptocurrency-7-things-to-know">
            What Is Cryptocurrency? Here’s What You Should Know
            </a>
          </li>
          <br/>
          <li> <a 
            id="article2"
            href="https://inews.co.uk/inews-lifestyle/money/investing/rise-cryptocurrency-astrology-bitcoin-traders-turning-to-stars-980845">
            The rise of cryptocurrency astrology: Why Bitcoin traders are turning to the stars
            </a>
          </li>
          <br/>
          <li><a 
            id="article3"
            href="https://www.washingtonpost.com/technology/2021/06/13/maren-altman-tiktok-astrology-bitcoin/">
            Can astrology make sense of cryptocurrency? Maren Altman and a million TikTok followers think so.
            </a>
          </li>
         </ul> 
        </Col>
        <Col id="vid">Videos
          <ul>
          <br/>
           <li> <a 
            id="vid1"
            href="https://www.youtube.com/watch?v=Yb6825iv0Vk">
            How To Invest In Crypto Full Beginners Guide in 2021
            </a>
          </li>
          <br/>
          <li> <a 
            id="vid2"
            href="https://www.youtube.com/watch?v=079PO1w7ego">
            Matrix AI Network | Is MAN the True 100x SLEEPING GIANT?! | AI & Big Data
            </a>
          </li>
          <br/>
          <li><a 
            id="vid3"
            href="https://www.youtube.com/watch?v=A81tVjrnSFU">
            Big Matrix AI Network News Matrix AI Big Year Matrix AI Network Price Prediction 2021
            </a>
          </li>
         </ul> 
        </Col>
      </Row>
    </Container>
  </div>
    <a id ="exitNow" href="https://www.youtube.com/watch?v=QH2-TGUlwu4">
      <img
        src = {exit}
         width="90px" height="70px"
        >
      </img>
    </a>
  </div>;
}
