import { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HelpSupport = () => {
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const handleAccordionChange = (question) => {
        setExpandedQuestion(question === expandedQuestion ? null : question);
    };

    return (
        <div className="help_page">
            <Accordion expanded={expandedQuestion === 1} onChange={() => handleAccordionChange(1)}
                className="accordion_menu"
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6"
                     className='accordion_title'
                    >ORDER TRACKING/SHIPPING</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        className='accordion_content'
                    >
                        <strong>Q: How many days do an order take to be shipped and delivered?</strong>
                        <br />
                        A: An order by AFPL is prepared to be shipped within 48 hours. The shipping is done right after. The order then takes 7 to 10 working days to reach its destination.
                        <br /><br />
                        <strong>Q: How can I track my order?</strong>
                        <br />
                        A: Once you place the order, you will get a confirmation call from AFPL within 24 hours. After you confirm the order, we will proceed with the order for shipping. Within the next 24 to 48 hours, you will get your tracking link via WhatsApp from our team.
                        <br /><br />
                        <strong>Q: How will I find my tracking Id ?</strong>
                        <br />
                        A:Our team will contact you within 24 to 48 hours of placing the order. Once the order is confirmed by you, you will receive a tracking link via WhatsApp from our team.
                        <br /><br />
                        <strong>Q: Will all my orders come in a single package or not ?</strong>
                        <br />
                        A:The packaging depends on the availability of the dress. If all your orders are available at the warehouse at the time of confirmation, we will ship them together in the same package. In case all the orders are not present at the warehouse, we will first ship the ones available and later ship the rest.
                        <br /><br />
                        <strong>Q: Why is my order returned to the company ?</strong>
                        <br />
                        A:Your order has been returned to the company because the delivery person was not able to contact you. Please edit your address or contact details if you have faced this issue.
                        <br /><br />
                        <strong>Q: Can I edit my order after shipping ?</strong>
                        <br />
                        A:No, once the shipping is done, it is impossible for us to make the edits in the order. However, you can make edits within 24 hours of placing the order. You can directly contact our team or make the changes when you get the confirmation call from us.
                        <br /><br />
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedQuestion === 2} onChange={() => handleAccordionChange(2)}
                className="accordion_menu"
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6"
                        className='accordion_title'
                    >CANCELLATION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                     className='accordion_content'
                    >
                        <strong>Q:What is AFPL’s cancelation policy ?</strong>
                        <br />
                        A:We accept cancelation requests within 24 hours of ordering. Make sure you cancel the order in time or it will be shipped from our end.
                        <br /><br />
                        <strong>Q:How and when can I cancel my order ?</strong>
                        <br />
                        A:The best time to cancel an order is right after you have placed the order and before it has shipped. It will save us some energy. You can simply cancel your order by contacting our team over WhatsApp.
                        <br /><br />
                        <strong>Q:Can I cancel my order after it has arrived ?</strong>
                        <br />
                        A:No, you cannot cancel your order after it has arrived. However, you can simply return the order to us. We will arrange a reverse pickup for the order. Once received back, we will put it through a quality check. Once approved, you will receive AFPL credits for your order that you can use whenever you wish to in the future. The credits never expire.
                        <br /><br />
                        <strong>Q:Will I get a full refund on cancelation of my order ?</strong>
                        <br />
                        A:At AFPL we do not have a refund policy after the cancellation of an order. If you still cancel or return your order you will be given a credit note for the store that you can use later.
                        <br /><br />
                        <strong>Q:I wish to cancel only a part of my order, can I do that ?</strong>
                        <br />
                        A:Yes, you can cancel a part of your order if you do not wish to get it. The process of the cancellation will remain the same and hassle free. You just have to contact our team via the WhatsApp number and we will process your request. Make sure the request is put up within 24 hours of placing the order.
                        <br /><br />
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedQuestion === 3} onChange={() => handleAccordionChange(3)}
                className="accordion_menu"
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6"
                     className='accordion_title'
                    >RETURN</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                     className='accordion_content'
                    >
                        <strong>Q: How can I return my order?</strong>
                        <br />
                        A:
                        Step 1 - You can request a return simply by contacting us on our support number. Or you can email us at support@afplstores.com
                        <br />
                        Step 2 - Our team will get in action and start the process. We will arrange a return pickup in 2-3 days.
                        <br />
                        Step 3 - The order will reach back to us in 7 days.
                        <br />
                        Step 4 - The order will go under quality check.
                        <br />
                        Step 5 - Once approved, you will receive store credits that you can use whenever you wish.
                        <br /><br />
                        <strong>Q: Will I be charged for a return?</strong>
                        <br />
                        A: At AFPL, we strive to provide our customers with high-quality products and excellent customer service. However, please note that returns and reverse shipments come with costs associated with processing and shipping. To help cover these costs, we charge a processing fee of 300INR for all returns. We appreciate your understanding and hope to continue providing you with exceptional service.
                        <br /><br />
                        <strong>Q: Till when can I use my store credit?</strong>
                        <br />
                        A: Store credits never expire. You can use the store credits whenever you wish to in your lifetime. You can use them in 2 months or after 10 years. We will always be happy to deliver our precious products to you.
                        <br /><br />
                        <strong>Q: Can I give the order back to the delivery person if it’s not as per my choice?</strong>
                        <br />
                        A: No, you cannot give the order back to the delivery person. We do not offer trials while delivery. If you are ordering on COD, you will not be allowed to open the parcel before you hand over the amount of the order. If you do not like the order, you can simply generate a return request, and we will take back the order. It is a hassle-free process.
                        <br /><br />
                        <strong>Q: Can I return a part of my order?</strong>
                        <br />
                        A: Yes, you can return a part of the order. The return policy is simple and convenient. Once the return request is generated, we will begin the return process.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedQuestion === 4} onChange={() => handleAccordionChange(4)}
                className="accordion_menu"
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6"
                     className='accordion_title'
                    >ARADHANA GUARANTEE</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                     className='accordion_content'
                    >
                        Aradhna Fashions is a 43-year-old fashion house physically located in Amravati, Maharashtra. For over 4 decades, Aradhna Fashion has been the most prominent name for fashion in Amravati. Our customers love us and take pride in being a part of the AFPL family. The love of our customers and 43 years of work in fashion led us to finally come online to reach out to customers around the nation. Our quality and versatile collection are our pride. Our humongous collection has a lot to choose from for everyone. We have been working with an aim to reach every household in the country, and soon enough, we will.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedQuestion === 5} onChange={() => handleAccordionChange(5)}
                className="accordion_menu"
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6"
                     className='accordion_title'
                    >OTHERS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                     className='accordion_content'
                    >
                        <strong>  Q: I have received the wrong product, what do I do? </strong>
                        <br />
                        A: If this happens, record a video of the order and share it with us on WhatsApp along with the picture of the shipping label. We will then raise a request for "Wrong product received." Our team will verify the situation from our end. If the request is accepted, you will be informed within 48 hours of the same.
                        <br /><br />
                        <strong>
                            Q: Will the dress be the same as the picture? </strong>
                        <br />
                        A: Yes, the work of the dress, the length, the style, and everything else will be the same as the picture. However, due to the lighting used during the photoshoot, the color of the dress may or may not differ by a shade or two. In order to confirm the color, you can always read about it in the description.
                        <br /><br />
                        <strong>
                            Q: Will the colors be exactly the same as the picture? </strong>
                        <br />
                        A: The color of the dress may or may not differ by a shade or two from the pictures. Artificial lighting is used during the photoshoot of every product, which may at times cause a slight difference in the color of the dress in pictures. If you have doubts, you can always read about the dress and its color in the description or reach out to us.
                        <br /><br />
                        <strong>
                            Q: How will I know if the fabric is satisfactory? </strong>
                        <br />
                        A: Aradhna Fashion is a 40-year-old brand. We have our physical stores in Amravati, Maharashtra, where we are loved. Our quality and fabric are our pride. Our quality is the one USP we have that has helped us become the most prominent fashion brand in parts of Maharashtra. The fabric will be as described in the description of the product.
                        <br /><br />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default HelpSupport;
