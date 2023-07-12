import { Box, Rating } from "@mui/material";
import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { AiOutlineInstagram } from "react-icons/ai";
import { useAddProductReviewMutation } from "../../services/api";
import { toast } from 'react-toastify';
import { ApiPost } from "../../services/API/api";
import framIcon from "../../assets/img/home/Frame.png";

const WriteAReviews = ({ showReviewsWrite, handleClose, id }) => {
  const [addProductReview] = useAddProductReviewMutation(undefined, {})
  const [imageLoading, setImageLoading] = useState(false);
  const [formData, setFormData] = useState({
    review: "",
    rating: 0,
    images: []
  });

  const handleSubmit = async () => {
    if (formData?.review != "" && formData?.rating != 0) {
      await addProductReview({ ...formData, product: id }).unwrap().then((data) => {
        handleClose();
        toast.success("Review Added Successfully")
      }).catch((error) => toast.error(error?.data?.message))
    }
  }


  const handleImageUpload = async (event) => {
    const filesData = new FormData();
    Object.values(event?.target?.files).forEach((value) => {
      filesData.append(`file`, value);
    });

    const config = {
      'Content-Type': 'multipart/form-data'
    };

    setImageLoading(true);
    const images = formData?.images ?? []
    await ApiPost("fileUpload/product", filesData, config)
      .then((response) => {
        if (response?.data) {
          let ImagesData = [];
          response?.data && response?.data?.forEach((element) => {
            ImagesData.push(element?.Location)
          })
          setFormData({
            ...formData, images: [...images, ...ImagesData]
          });
        }
        setImageLoading(false)
      })
      .catch((error) => {
        setImageLoading(false)
        console.log("Error", error);
      });
  }

  const handleDeleteImage = async (index) => {
    // setImageLoading(true)
    // await ApiPost('fileRmove', {
    //   url: formData?.images?.[index]?.url,
    //   type: 'Product'
    // })
    //   .then((response) => {
    //     setImageLoading(false)
    //     if (response?.data) {
    //       let images = formData?.images ?? []
    //       images = images?.filter((img, i) => i != index)
    //       setFormData({ ...formData, image: images });
    //     }
    //   })
    //   .catch((error) => {
    //     setImageLoading(false)
    //     console.log("Error", error);
    //   });
    let images = formData?.images ?? []
    images = images?.filter((img, i) => i != index)
    setFormData({ ...formData, images });
  }


  return (
    <>
      <Modal
        show={showReviewsWrite}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Body className="review_body">
          <div className="login_wrap reviews_modal">
            <div className="review_title_wrap">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_928)">
                  <path
                    d="M14.499 9.21879V15.9168H1.10303V2.52078H7.80103"
                    stroke="#2A3990"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M15.6486 4.08176L8.22689 11.5035L5.4668 11.5532L5.51646 8.79307L12.9382 1.37134L15.6486 4.08176Z"
                    stroke="#000"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_928">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.5 0.519897)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span style={{ marginLeft: "22px", fontSize: "16px", fontWeight: "600" }}>Write a Review</span>
              {/* <span className="review_title_wrap_proName">Brocade Kurta</span> */}
            </div>
            <div className="review_input_wrap">
              <div className="review_input_inner">
                <textarea
                  rows="4"
                  cols="50"
                  value={formData?.review}
                  onChange={(e) => {
                    setFormData({ ...formData, review: e.target.value })
                  }}
                  placeholder="What did you think of it?"
                ></textarea>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  className="review_input_stars"
                >
                  <Rating
                    name="simple-controlled"
                    value={formData?.rating}
                    sx={{
                      '& .MuiRating-icon': {
                        color: '#2A3592',
                        fontSize: "30px",
                      },
                      '& .MuiRating-iconFilled': {
                        color: '#2A3592',
                        fontSize: "30px",
                      },
                      '& .MuiRating-iconFocus': {
                        fontSize: "30px",
                      },
                      '& .MuiRating-iconHover': {
                        fontSize: "30px",
                      },
                    }}
                    onChange={(event, newValue) => {
                      setFormData({ ...formData, rating: newValue })
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "200px",
                      fontSize: "30px",
                    }}
                  />
                </div>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {formData?.images?.map((list, index) => (
                    <Box sx={{
                      position: 'relative'
                    }}>
                      <img src={list} style={{ padding: '10px' }} alt='image' width="60px" height="60px" />
                      <Box sx={{
                        width: '15px',
                        height: '15px',
                        position: 'absolute',
                        right: '5px',
                        top: 0,
                        cursor: 'pointer'
                      }} onClick={() => {
                        handleDeleteImage(index)
                      }}>
                        <svg style={{
                          background: 'red',
                          borderRadius: '50%',
                        }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" class="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </Box>
                    </Box>
                  ))}
                  <label style={{ cursor: 'pointer' }}>
                    {/* <AiOutlineInstagram style={{ fontSize: "30px" }} /> */}
                    {/* <img src={framIcon} alt='framIcon' style={{ width: '30px', height: '30px' }} /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                      <g clip-path="url(#clip0_9234_3446)">
                        <path d="M11.76 17.14C14.5987 17.14 16.9 14.8387 16.9 12C16.9 9.16124 14.5987 6.85999 11.76 6.85999C8.92125 6.85999 6.62 9.16124 6.62 12C6.62 14.8387 8.92125 17.14 11.76 17.14Z" stroke="#2A3592" stroke-width="1.7" stroke-miterlimit="10" />
                        <path d="M18.3 7.32007C19.1284 7.32007 19.8 6.6485 19.8 5.82007C19.8 4.99164 19.1284 4.32007 18.3 4.32007C17.4716 4.32007 16.8 4.99164 16.8 5.82007C16.8 6.6485 17.4716 7.32007 18.3 7.32007Z" fill="#2A3592" />
                        <path d="M20.15 1.60999H3.37C2.26543 1.60999 1.37 2.50541 1.37 3.60998V20.39C1.37 21.4946 2.26542 22.39 3.36999 22.39H20.15C21.2546 22.39 22.15 21.4946 22.15 20.39V3.60999C22.15 2.50542 21.2546 1.60999 20.15 1.60999Z" stroke="#2A3592" stroke-width="1.7" stroke-miterlimit="10" />
                      </g>
                      <defs>
                        <clipPath id="clip0_9234_3446">
                          <rect width="22.48" height="22.48" fill="white" transform="translate(0.52002 0.76001)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <input
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      hidden
                      multiple
                      onClick={(event) => { event.target.value = '' }}
                      onChange={(e) => handleImageUpload(e)} />
                  </label>
                </Box>
              </div>
            </div>
            <button className="btn focus_clear" type="button" onClick={handleSubmit}>
              <span>Submit Review</span>
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WriteAReviews;
