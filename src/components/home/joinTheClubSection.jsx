import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ApiPost } from "../../services/API/api";

const JoinTheClubSection = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleJoin = async () => {
    if (!mobileNumber || mobileNumber.length < 10) {
      toast.error("Please enter valid mobile number");
      return;
    }

    await ApiPost("join_club/create", { mobile_number: mobileNumber }).then((data) => {
      toast.success("Successfully joined the club");
      setMobileNumber("");
    }).catch((err) => {
      toast.error(err?.error);
    })
  }

  return (
    <>
      <div className="join_the_club_wrap" id="join_the_club">
        <div className="container join_the_club_padding">
          <div className="join_the_club_inner">
            <h2 className="common_title" style={{
              marginBottom: 0
            }}>Join the Club</h2>
            <p
              className="common_description_new"
            >
              Professional Tutorials. Beauty Workshops. Special Deals. Be a part
              of Bunawat Club to get it all, free.
            </p>
            <div className="tel_number">
              <div className="tel_number_wrap">
                <span>+91</span>
                <input 
                  type="number"
                  placeholder="Phone Number"
                  className="tel_number_input"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              <button type="button" className="join_btn"
                onClick={handleJoin}
              >
                Join
              </button>
            </div>
            {/* <Box sx={{
              marginTop: "48px",
              // '@media (max-width: 768px)': {
              //   marginTop: "48px",
              // }
            }}>
              <Link to="/" className="common_link">
                <span>How it Works</span>
                <svg
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_775)">
                    <path
                      d="M0.599976 1.43018H7.98998V8.82018"
                      stroke="#F2E7CB"
                      strokeWidth="1.7"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M0.599976 8.82018L7.98998 1.43018"
                      stroke="#F2E7CB"
                      strokeWidth="1.7"
                      strokeMiterlimit="10"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_775">
                      <rect
                        width="8.84"
                        height="8.84"
                        fill="white"
                        transform="translate(0 0.580078)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </Box> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinTheClubSection;
