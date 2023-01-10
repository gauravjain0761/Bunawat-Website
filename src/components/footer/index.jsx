import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_blog_section">
      <div className="container">
        <div className="footer_blog_inner">
          <div className="footer_header_wrap">
            <ul>
              <li>
                <Link to="/" className="d-flex align-items-center">
                  <p>Blog</p>
                  <span className="new_text">New</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p>Help & Support</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p>Returns</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p>Terms</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p>Track Order</p>
                </Link>
              </li>
            </ul>

            <div className="social_media_wrap">
              <Link to="/">
                <p>Follow us on Instagram</p>
                <span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.465 0.066C7.638 0.012 8.012 0 11 0C13.988 0 14.362 0.013 15.534 0.066C16.706 0.119 17.506 0.306 18.206 0.577C18.939 0.854 19.604 1.287 20.154 1.847C20.714 2.396 21.146 3.06 21.422 3.794C21.694 4.494 21.88 5.294 21.934 6.464C21.988 7.639 22 8.013 22 11C22 13.988 21.987 14.362 21.934 15.535C21.881 16.705 21.694 17.505 21.422 18.205C21.146 18.9391 20.7133 19.6042 20.154 20.154C19.604 20.714 18.939 21.146 18.206 21.422C17.506 21.694 16.706 21.88 15.536 21.934C14.362 21.988 13.988 22 11 22C8.012 22 7.638 21.987 6.465 21.934C5.295 21.881 4.495 21.694 3.795 21.422C3.06092 21.146 2.39582 20.7133 1.846 20.154C1.28638 19.6047 0.853315 18.9399 0.577 18.206C0.306 17.506 0.12 16.706 0.066 15.536C0.012 14.361 0 13.987 0 11C0 8.012 0.013 7.638 0.066 6.466C0.119 5.294 0.306 4.494 0.577 3.794C0.853723 3.06008 1.28712 2.39531 1.847 1.846C2.39604 1.2865 3.06047 0.853443 3.794 0.577C4.494 0.306 5.294 0.12 6.464 0.066H6.465ZM15.445 2.046C14.285 1.993 13.937 1.982 11 1.982C8.063 1.982 7.715 1.993 6.555 2.046C5.482 2.095 4.9 2.274 4.512 2.425C3.999 2.625 3.632 2.862 3.247 3.247C2.88205 3.60205 2.60118 4.03428 2.425 4.512C2.274 4.9 2.095 5.482 2.046 6.555C1.993 7.715 1.982 8.063 1.982 11C1.982 13.937 1.993 14.285 2.046 15.445C2.095 16.518 2.274 17.1 2.425 17.488C2.601 17.965 2.882 18.398 3.247 18.753C3.602 19.118 4.035 19.399 4.512 19.575C4.9 19.726 5.482 19.905 6.555 19.954C7.715 20.007 8.062 20.018 11 20.018C13.938 20.018 14.285 20.007 15.445 19.954C16.518 19.905 17.1 19.726 17.488 19.575C18.001 19.375 18.368 19.138 18.753 18.753C19.118 18.398 19.399 17.965 19.575 17.488C19.726 17.1 19.905 16.518 19.954 15.445C20.007 14.285 20.018 13.937 20.018 11C20.018 8.063 20.007 7.715 19.954 6.555C19.905 5.482 19.726 4.9 19.575 4.512C19.375 3.999 19.138 3.632 18.753 3.247C18.3979 2.88207 17.9657 2.60121 17.488 2.425C17.1 2.274 16.518 2.095 15.445 2.046V2.046ZM9.595 14.391C10.3797 14.7176 11.2534 14.7617 12.0669 14.5157C12.8805 14.2697 13.5834 13.7489 14.0556 13.0422C14.5278 12.3356 14.7401 11.4869 14.656 10.6411C14.572 9.79534 14.197 9.00497 13.595 8.405C13.2112 8.02148 12.7472 7.72781 12.2363 7.54515C11.7255 7.36248 11.1804 7.29536 10.6405 7.34862C10.1006 7.40187 9.57915 7.57418 9.1138 7.85313C8.64846 8.13208 8.25074 8.51074 7.9493 8.96185C7.64786 9.41296 7.45019 9.92529 7.37052 10.462C7.29084 10.9986 7.33115 11.5463 7.48854 12.0655C7.64593 12.5847 7.91648 13.0626 8.28072 13.4647C8.64496 13.8668 9.09382 14.1832 9.595 14.391ZM7.002 7.002C7.52702 6.47698 8.15032 6.0605 8.8363 5.77636C9.52228 5.49222 10.2575 5.34597 11 5.34597C11.7425 5.34597 12.4777 5.49222 13.1637 5.77636C13.8497 6.0605 14.473 6.47698 14.998 7.002C15.523 7.52702 15.9395 8.15032 16.2236 8.8363C16.5078 9.52228 16.654 10.2575 16.654 11C16.654 11.7425 16.5078 12.4777 16.2236 13.1637C15.9395 13.8497 15.523 14.473 14.998 14.998C13.9377 16.0583 12.4995 16.654 11 16.654C9.50046 16.654 8.06234 16.0583 7.002 14.998C5.94166 13.9377 5.34597 12.4995 5.34597 11C5.34597 9.50046 5.94166 8.06234 7.002 7.002V7.002ZM17.908 6.188C18.0381 6.06527 18.1423 5.91768 18.2143 5.75397C18.2863 5.59027 18.3248 5.41377 18.3274 5.23493C18.33 5.05609 18.2967 4.87855 18.2295 4.71281C18.1622 4.54707 18.0624 4.39651 17.936 4.27004C17.8095 4.14357 17.6589 4.04376 17.4932 3.97652C17.3275 3.90928 17.1499 3.87598 16.9711 3.87858C16.7922 3.88119 16.6157 3.91965 16.452 3.9917C16.2883 4.06374 16.1407 4.1679 16.018 4.298C15.7793 4.55103 15.6486 4.88712 15.6537 5.23493C15.6588 5.58274 15.7992 5.91488 16.0452 6.16084C16.2911 6.40681 16.6233 6.54723 16.9711 6.5523C17.3189 6.55737 17.655 6.42669 17.908 6.188V6.188Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <div className="blog_details_wrap">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="blog_info">
                  <p>
                    Aradhana Fashion is a pioneer Indian ethnic wear brand for
                    over 4 decades now. Our beautiful collection always leaves
                    women with a twinkle in the eye. Our collection of Indian
                    ethnic wear and Indian designer wear are specifically made
                    to make woman feel strong, confident, and powerful as she
                    flaunts her curves and opinions. Other than that, at
                    Aradhana Fashion, we celebrate each woman for who she is. We
                    take the greatest pleasure in showcasing the gorgeous,
                    beautifully handcrafted, and trendiest collection of Indian
                    wedding dresses online.
                  </p>
                </div>

                <div className="blog_info">
                  <p>
                    Indian ethnic wear is continuously evolving with time and
                    upcoming fashion trends, and we aim to keep up with it by
                    offering wide variety of collection, you ask for a wedding
                    collection or a whole new range of Indian designer wear, we
                    are with it, anytime of the year. Our collection includes
                    fancy designer sarees, pre- stitched sarees, Indian
                    bridesmaid dresses, festive wear dresses, women wedding
                    wear, regular wear dresses etc. You can search using filters
                    to find a perfect fit.
                  </p>
                </div>

                <div className="blog_info">
                  <h3>BEST INDIAN ETHNIC WEAR BY AFPL</h3>
                  <p>
                    Indian Designer Sarees – Designer sarees have received so
                    much popularity and attention in recent times because of its
                    elegance & exceptional style. There’s no denying fact that
                    saree is one of the most wonderful Indian ethnic wear anyone
                    could think of. We have exclusively curated the collection
                    of wonder Indian designer wear sarees for multiple
                    occasions.
                  </p>
                </div>

                <div className="blog_info">
                  <p>
                    Festive wear dresses - When we think of a festive
                    celebration first thing that strikes our mind is lively
                    vibrant hues! keeping this amazing concept in our mind, AFPL
                    festive collection is in harmony with trending colours of
                    the season and mind blowing silhouettes. Our festive
                    collection includes fancy designer sarees , lehengas, salwar
                    kameez, kurti set and many more styles of Indian ethnic wear{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="blog_info">
                  <p>
                    Indian wedding dresses – Weddings are greatest festival in
                    India. The houses are decorated with lights and the
                    fragrance of celebration is in the air. The celebration
                    demands everyone to be dressed in their best. This is why
                    our collection of Indian wedding dresses online is loaded
                    with spectacular Indian designer wear and Indo western
                    outfits to add more beauty to your already charming persona.
                    Also, you can find some beautiful lehngas & sarees online
                    for gifting purpose.
                  </p>
                </div>

                <div className="blog_info">
                  <p>
                    Ready to wear sarees - We at AFPL always try to come up with
                    better to best wearable, and affordable fashion options for
                    you. This is why we have introduced ready to wear sarees ,
                    these sarees look same as unstitched saree and the best part
                    is you can wear these sarees in just one minute. Pick your
                    favorite from our collection of women ethnic wear online.
                  </p>
                </div>

                <div className="blog_info">
                  <p>
                    Regular wear dresses – Regular wear dresses have always
                    caught women’s heart. This is why our regular wear
                    collection is loaded with some amazing comfortable and chic
                    outfits. The women regular wear collection includes kaftan
                    pant set, peplum tops, kurties, palazzo set, short tops,
                    skirts , denim kurties etc .
                  </p>
                </div>

                <div className="blog_info">
                  <p>
                    Men's wear collection- We know that men are as excited as
                    women to shop! Keeping this thought in mind we have recently
                    included one more category in our website. Now you can shop
                    amazing men ethnic wear online from our website!
                  </p>
                </div>

                <div className="blog_info">
                  <h3>TIMELESS ETHNIC WARDROBE ESSENTIALS </h3>
                  <p>
                    The most interesting part about shopping with AFPL is the
                    fact that we always update our collection of trendy women
                    ethnic wear online on regular basis. So, you can easily pick
                    a few classic pieces that can never go out of fashion.
                    Follow us{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="blog_info">
                  <p>
                    on social media to get regular updates of our top trending
                    products and many other engaging activities like giveaway
                    quizes, keep yourself updated with what is happening in the
                    world of Indian ethnic and Indian designer wear. Check out
                    our blog , that offers some amazing styling tips, shopping
                    tips and much more . Keep visiting our website to stay
                    updated with best of offers and deals on Indian wedding
                    dresses online. Here are some options for you if you're not
                    able to decide what to wear: When in doubt wear a Maroon
                    colour, it’s a timeless piece and for sure is the most
                    auspicious colour for occasions. These amazing Maroon
                    classic pieces can be your go to this wedding season.
                  </p>
                </div>

                <div className="blog_info">
                  <h3>KEEP IN MIND WHILE SHOPPING ONLINE</h3>
                  <ul>
                    <li>
                      Here are some amazing tips for you to keep in mind while
                      shopping online:
                    </li>
                    <li>
                      Before you make a purchasing decision just make sure you
                      check your current wardrobe and identify your
                      requirements.
                    </li>
                    <li>
                      Identify 2- 3 different ways you could style the outfit
                      with already existing piece in your wardrobe.
                    </li>
                    <li>
                      If you’re able to identify 2 -3 ways, then it’s a good
                      investment for you!
                    </li>
                  </ul>
                </div>

                <div className="blog_info">
                  <h3>FREQUENTLY ASKED QUESTIONS</h3>
                  <ul>
                    <li>
                      As weddings are lined up, we need a lot of Indian wedding
                      dresses to go with the occasions. Here are some amazing
                      tips to know your personal style –{" "}
                    </li>
                    <li>
                      A good quality fabric is the most important factor to
                      consider while selecting an ethnic wear, so always choose
                      your fabric wisely.{" "}
                    </li>
                    <li>
                      Be very specific about colour and prints. Go for pastel
                      and vibrant tones if you want to look expensive and if you
                      want to look sober and elegant, wear muted shades.{" "}
                    </li>
                    <li>
                      Always make sure that the garment is having perfect fit
                      i.e. not too tight not too baggy. Make sure that you feel
                      comfortable and confident in the outfit you choose.{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="blog_info">
                  <h3>How safe it is shop lehngas and sarees online?</h3>
                  <p>
                    It is safe to shop women ethnic wear online, you just have
                    to cross check the source from where you are buying, check
                    customer reviews and social media profiles. Here are some of
                    the benefits of shopping online from AFPL store- We provide
                    you a time limit to return or exchange your products in case
                    there is any problem.{" "}
                  </p>
                  <ul>
                    <li>We offer great discounts and cashback.</li>
                    <li>
                      You can check the ratings and reviews of the products
                      given by our customers which is a great thing.{" "}
                    </li>
                    <li>
                      You can contact us anytime if you are facing issues
                      related to online transactions, you can even opt for cash
                      on delivery.{" "}
                    </li>
                    <li>
                      You get proper product details, and all the items are
                      delivered at your doorstep.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link className="footer_logo">
            <svg
              width="120"
              height="43"
              viewBox="0 0 120 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_870)">
                <path
                  d="M31.033 29.405L24.7195 23.0915V9.61205C24.7195 5.07557 21.0209 1.37704 16.4845 1.37704C12.8437 1.37704 9.73754 3.76086 8.66843 7.04042L4.95545 3.32744L6.41464 1.86825L4.66651 0.120117L0 4.78662L1.74813 6.53476L3.20732 5.07557L8.26391 10.1322V23.626C8.26391 28.1625 11.9624 31.861 16.4989 31.861C20.1397 31.861 23.2458 29.4772 24.315 26.1977L29.2849 31.1676L31.033 29.4194V29.405ZM16.4989 3.84754C19.6773 3.84754 22.2634 6.43363 22.2634 9.61205V20.6354L10.7489 9.12084C10.9945 6.17357 13.4794 3.84754 16.4989 3.84754V3.84754ZM16.4989 29.3761C13.3205 29.3761 10.7344 26.79 10.7344 23.6116V12.5882L22.249 24.1028C22.0034 27.0501 19.5184 29.3761 16.4989 29.3761V29.3761Z"
                  fill="#9A9EB0"
                />
                <path
                  d="M119.581 2.9519H48.6732V5.42241H55.6658V9.01981C54.5244 8.12407 53.1086 7.61841 51.6494 7.61841C48.0809 7.61841 45.1625 10.5223 45.1625 14.1053V22.2681C45.1625 25.8366 48.0665 28.7549 51.6494 28.7549C53.1086 28.7549 54.5244 28.2493 55.6658 27.3535V29.5062C54.1055 30.0263 53.0364 31.4855 53.0364 33.1614V36.9322H55.5069V33.1614C55.5069 32.3957 56.1281 31.7744 56.8938 31.7744C57.6595 31.7744 58.2808 32.3957 58.2808 33.1614V36.5132C58.2808 38.7236 56.4748 40.5296 54.2644 40.5296C52.0539 40.5296 50.248 38.7236 50.248 36.5132V32.7424H47.7775V36.5132C47.7775 40.0817 50.6814 43.0001 54.2644 43.0001C57.8473 43.0001 60.7513 40.0961 60.7513 36.5132V33.1614C60.7513 31.4855 59.6822 30.0408 58.1218 29.5062V5.42241H73.8406V9.56881C72.6993 8.67307 71.2834 8.16741 69.8242 8.16741H68.3795C66.6458 8.16741 65.0132 8.84644 63.7997 10.06C62.5716 11.288 61.9071 12.9206 61.9071 14.6398V24.883C61.9071 27.0068 63.6407 28.7405 65.7645 28.7405C67.8883 28.7405 69.622 27.0068 69.622 24.883V14.6398C69.622 12.8917 68.4373 11.4036 66.8336 10.9269C67.3248 10.7246 67.8449 10.6235 68.3795 10.6235H69.8242C72.0347 10.6235 73.8406 12.4294 73.8406 14.6398V30.9365H76.3111V5.42241H81.1221V30.9509H83.5926V5.42241H98.9068V9.01981C97.7655 8.12407 96.3496 7.61841 94.8904 7.61841C91.3219 7.61841 88.4036 10.5223 88.4036 14.1053V22.2681C88.4036 25.8366 91.3075 28.7549 94.8904 28.7549C96.3496 28.7549 97.7655 28.2493 98.9068 27.3535V30.9509H101.377V5.42241H113.181V8.19631C112.487 7.82067 111.722 7.61841 110.913 7.61841C108.298 7.61841 106.174 9.74218 106.174 12.3572V25.2009C106.174 28.4515 108.818 31.0954 112.068 31.0954C115.319 31.0954 117.963 28.4515 117.963 25.2009V20.6644H115.492V25.2009C115.492 27.0935 113.947 28.6394 112.054 28.6394C110.161 28.6394 108.615 27.0935 108.615 25.2009V12.3572C108.615 11.1147 109.627 10.0889 110.884 10.0889C112.141 10.0889 113.152 11.1002 113.152 12.3572V12.7617H115.565L115.622 12.4149V5.42241H119.957V2.9519H119.552H119.581ZM94.9049 10.0889C97.1153 10.0889 98.9213 11.8948 98.9213 14.1053V22.2681C98.9213 24.4785 97.1153 26.2844 94.9049 26.2844C92.6944 26.2844 90.8885 24.4785 90.8885 22.2681V14.1053C90.8885 11.8948 92.6944 10.0889 94.9049 10.0889ZM51.6494 10.0889C53.8599 10.0889 55.6658 11.8948 55.6658 14.1053V20.4621L47.8931 12.6894C48.4854 11.1291 49.9591 10.0889 51.6494 10.0889V10.0889ZM51.6494 26.2844C49.439 26.2844 47.633 24.4785 47.633 22.2681V15.9112L55.4057 23.6839C54.8134 25.2442 53.3398 26.2844 51.6494 26.2844ZM67.1659 24.8975C67.1659 25.6632 66.5447 26.2844 65.779 26.2844C65.0132 26.2844 64.392 25.6632 64.392 24.8975V14.6543C64.392 13.8886 65.0132 13.2673 65.779 13.2673C66.5447 13.2673 67.1659 13.8886 67.1659 14.6543V24.8975Z"
                  fill="#9A9EB0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_870">
                  <rect
                    width="120"
                    height="42.8798"
                    fill="white"
                    transform="translate(0 0.120117)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
