import React from "react";
import "./Thumbnail2.css";

const Thumbnail2 = ({ backgroundImage, link }) => {
  return (
    <>
      <div>
        <a href={link}>
          <div
            className="thumbnail2"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          ></div>
        </a>
      </div>
    </>
  );
};

// function Thumbnail() {
//   return (
//     <>
//       <div>
//         <a href="https://www.etsy.com/listing/1452630681/how-do-they-really-feel-same-day-psychic?click_key=7fd3dfc454db43f222765da673328a7e278dc6f7%3A1452630681&click_sum=8e7bcccb&ref=shop_home_active_1&crt=1">
//           <div class="thumbnail"></div>
//         </a>
//       </div>
//     </>
//   );
// }

export default Thumbnail2;
