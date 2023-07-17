import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from '@mui/material';
import NewFooter from '../../components/newFooter/footerStrip';
import { useState } from 'react';

const ReturnTerm = () => {

    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const handleAccordionChange = (question) => {
        setExpandedQuestion(question === expandedQuestion ? null : question);
    };

    return (
        <>

            <div className="returnTerm_page">
                <Accordion expanded={expandedQuestion === 1} onChange={() => handleAccordionChange(1)}
                className="accordion_menu"
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6" className="accordion_title">Q: How can I return my order?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="accordion_content">
                            Step 1. - You can request a return simply by contacting us on our support number. Or you can email us at support@afplstores.com
                            <br /><br />
                            Step 2 - Our team will get in action and start the process. We will arrange a return pickup in 2-3 days.
                            <br /><br />
                            Step 3 – The order will reach back to us in 7 days.
                            <br /><br />
                            Step 4 – The order will go under quality check.
                            <br /><br />
                            Step 5 – Once approved, you will receive store credits that you can use whenever you wish.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expandedQuestion === 2} onChange={() => handleAccordionChange(2)}
                className="accordion_menu"
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6" className="accordion_title">Q: Will I be charged for a return?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="accordion_content">
                            At AFPL, we strive to provide our customers with high-quality products and excellent customer service. We understand that sometimes you may need to return a product, and we want to make that process as smooth and convenient as possible.
                            However, please note that returns and reverse shipments come with costs associated with processing and shipping. To help cover these costs, we charge a processing fee of 300INR for all returns.
                            We appreciate your understanding and hope to continue providing you with exceptional service.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expandedQuestion === 3} onChange={() => handleAccordionChange(3)}
                className="accordion_menu"
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6" className="accordion_title">Q: Till when can I use my store credit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                         className='accordion_content'
                        >
                            Store credits never expire. You can use the store credits whenever you wish to in your lifetime. You can use them in 2 months or after 10 years. We will always be happy to deliver our precious products to you.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expandedQuestion === 4} onChange={() => handleAccordionChange(4)}
                className="accordion_menu"
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6" className="accordion_title">Q: Can I give the order back to the delivery person if it’s not as per my choice?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                         className='accordion_content'
                        >
                            No, you cannot give the order back to the delivery person. We do not offer trials while delivery. If you are ordering on COD, you will not be allowed to open the parcel before you handover the amount of the order.
                            If you do not like the order, you can simply generate a return request and we will take back the order. It is a hassle-free process.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expandedQuestion === 5} onChange={() => handleAccordionChange(5)}
                className="accordion_menu"
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6" className="accordion_title">Q: Can I return a part of my order?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                         className='accordion_content'
                        >
                            Yes, you can return a part of the order. The return policy is simple and convenient. Once the return request is generated, we will begin the return process.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            {/* <Box sx={{
        padding: "0rem 2rem", 
        background: "#fff",
        '@media (max-width: 768px)': {
        padding: "1rem 2rem"
        }
    }}>
      <NewFooter />
    </Box> */}
        </>
    );
}

export default ReturnTerm;
