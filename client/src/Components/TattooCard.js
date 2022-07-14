import React, {useState} from "react";
// import { Pressable } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";



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
  const [liked, setLiked] = useState(false);

  //  function onTattooLike(tattoo) {
  //    setLiked([...liked, tattoo]);
  //  }

  //  const LikeButton = () => {
  //   const liked = useSharedValue(0);
  
  //   const outlineStyle = useAnimatedStyle(() => {
  //     return {
  //       transform: [
  //         {
  //           scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
  //         },
  //       ],
  //     };
  //   });

  //  const fillStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ scale: liked.value }],
  //     opacity: liked.value,
  //   };
  // });

  return (
    <div>
        <img 
        src={tattoo.image_url} 
        alt={tattoo.image_url}
        />
    </div>
  );
}

export default TattooCard;
