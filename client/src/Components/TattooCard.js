import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function TattooCard({ tattoo }) {
  // const style = {
  //     gridColumnEnd: `span ${getSpanEstimate(tattoo.image_url.width)}`,
  //     gridRowEnd: `span ${getSpanEstimate(tattoo.image_url.height)}`,
  //   };

  // function getSpanEstimate(size) {
  //   if (size > 250) {
  //     return 2;
  //   }

  //   return 1;
  // }

  // return (
  //   <img style={style} src={tattoo.image_url} alt={""} class="gridContainer" />
  // );

  // const [liked, setLiked] = useState(false)

  // function handleLike() {
  //   onTattooLike(tattoo)
  //   setLiked(!liked)
  // }

  // console.log(tattoo.image_url);
  // if () {

  // }
  return (
    <div >
        <img src={tattoo.image_url} alt="Japanese Tattoo 1" />
    </div>
  );
}

export default TattooCard;
