import { Helmet } from "react-helmet";

const HelmetComponent = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content="IJCVMP, International Journal of Computer Vision and Multimedia Processing , Computer Vision & Multimedia Processing, Journal & Performance research papers ,Computer Vision" />
      <meta name="description" content="The International Journal of Computer Vision and Multimedia Processing (IJCVMP) publishes cutting-edge research on AI, image processing, and multimedia." />
      <meta name="author" content="IJCVMP Editorial Team" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="International Journal of Computer Vision and Multimedia Processing" />
      <meta property="og:description" content="The International Journal of Computer Vision and Multimedia Processing (IJCVMP) publishes cutting-edge research on AI, image processing, and multimedia." />
      <meta property="og:url" content="https://www.ijcvmp.com/" />
      <meta property="og:image" content="https://www.ijcvmp.com/assets/IJCVMP.png" />

      <link rel="icon" type="image/png" href="https://www.ijcvmp.com/assets/Fav Icon.png" />
    </Helmet>
  );
};

export default HelmetComponent;