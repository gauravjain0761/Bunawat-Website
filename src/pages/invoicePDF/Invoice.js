import React from "react";
import { Page, Document } from "@react-pdf/renderer";
import Html from 'react-pdf-html';
import ReactDOMServer from 'react-dom/server';
{/* <style>
{`
.bunawat_doc{
border: 1px solid #000;

}
.bunawat_doc_top{
padding: 40px 20px;
}
.bunawat_doc_top_data{
display: flex;
justify-content: space-between;
}
.bunawat_doc_top_data h4{
margin-top: 2px;
margin-bottom: 2px;
font-weight: 600;
font-size: 24px;
}
.bunawat_doc_top_data p{
margin-top: 2px;
font-weight: 300;
font-size: 16px;
}
.bunawat_doc_second_list span{
font-weight: 600;
}
.bunawat_doc_second {
padding: 4px;
}
table{
width: 100%;
}
table, th, td {
border: 1px solid rgb(221, 219, 219);
border-collapse: collapse;
padding: 4px;
}
`}
</style> */}
// const element = (
//     <html lang="en">
//         <body>

//             <div style={{ border: '1px solid #000' }}>
//                 <div style={{ padding: '40px 20px' }}>
//                     <div style={{
//                         display: 'flex',
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         justifyContent: 'space-between'
//                     }}>
//                         <img src="https://www.doctorsplaza.in/static/media/drplazanew.4676b1446028ae3ba8d8.png" style={{
//                             width: '150px',
//                             height: '70px'
//                         }} />
//                         <div>
//                             <h4 style={{
//                                 marginTop: '2px',
//                                 marginBottom: '2px',
//                                 fontWeight: '600',
//                                 fontSize: '24px'
//                             }}>AFPL STORES.COM PVT. LTD</h4>
//                             <p style={{
//                                 marginTop: '2px',
//                                 marginBottom: '2px',
//                                 fontWeight: '300',
//                                 fontSize: '16px'
//                             }}>Shop NO: 44-48, Block No: 2,<br />
//                                 Busyland Complex<br />
//                                 Nandgaon Peth Amravati,<br />
//                                 Maharashtra, 444901 <br />
//                                 Contact - +9198608000805<br />
//                                 GSTIN - 27AAVCA3244L1Z6<br />
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row bunawat_doc_second">
//                     <div className="col-sm-6">
//                         <div className="row bunawat_doc_second_list">
//                             <div className="col-sm-6">
//                                 <p><span>Billing</span> <br />
//                                     Avinash Thakur <br />
//                                     Master infotech <br />
//                                     12285<br />
//                                     mohali<br />
//                                     mohali, 160082
//                                 </p>
//                             </div>
//                             <div className="col-sm-6">
//                                 <p><span>Shiping</span> <br />
//                                     Avinash Thakur <br />
//                                     Master infotech <br />
//                                     12285<br />
//                                     mohali<br />
//                                     mohali, <br />
//                                     PB 160082
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-sm-6">
//                         <div className="row bunawat_doc_second_list">
//                             <div className="col-sm-4"><span>Invoice Number</span></div>
//                             <div className="col-sm-8"><span>: INV/2022-23/1887</span></div>
//                         </div>
//                         <div className="row bunawat_doc_second_list">
//                             <div className="col-sm-4">Order Number</div>
//                             <div className="col-sm-8">: 158673</div>
//                         </div>
//                         <div className="row bunawat_doc_second_list">
//                             <div className="col-sm-4">Order Date</div>
//                             <div className="col-sm-8">: 10 Nav, 2022</div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-sm-12">
//                         <table>
//                             <tr>
//                                 <th>Item</th>
//                                 <th>Cost</th>
//                                 <th>Qty</th>
//                                 <th>Total</th>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <b>Blue skirt and top set - Blue,s</b> <br />
//                                     <span style={{ fontSize: '14px' }}>sku: LSTS3028-Ylw-BL-1</span>
//                                 </td>
//                                 <td>INR 3,299.11</td>
//                                 <td>x1</td>
//                                 <td>INR 3,299.11</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <b>Blue skirt and top set - Blue,s</b> <br />
//                                     <span style={{ fontSize: '14px' }}>sku: LSTS3028-Ylw-BL-1</span>
//                                 </td>
//                                 <td>INR 3,299.11</td>
//                                 <td>x1</td>
//                                 <td>INR 3,299.11</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <b>Blue skirt and top set - Blue,s</b> <br />
//                                     <span style={{ fontSize: '14px' }}>sku: LSTS3028-Ylw-BL-1</span>
//                                 </td>
//                                 <td>INR 3,299.11</td>
//                                 <td>x1</td>
//                                 <td>INR 3,299.11</td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <b>Blue skirt and top set - Blue,s</b> <br />
//                                     <span style={{ fontSize: '14px' }}>sku: LSTS3028-Ylw-BL-1</span>
//                                 </td>
//                                 <td>INR 3,299.11</td>
//                                 <td>x1</td>
//                                 <td>INR 3,299.11</td>
//                             </tr>
//                         </table>

//                         <div className="row">
//                             <div className="col-sm-6"></div>
//                             <div className="col-sm-6" style={{ padding: '20px' }}>
//                                 <div className="row bunawat_doc_second_list">
//                                     <div className="col-sm-4"><b>Item Subtotal:</b></div>
//                                     <div className="col-sm-8">INR 33,919.64</div>
//                                 </div>
//                                 <div className="row bunawat_doc_second_list">
//                                     <div className="col-sm-4"><b>6% SGST:</b></div>
//                                     <div className="col-sm-8">2035.18</div>
//                                 </div>
//                                 <div className="row bunawat_doc_second_list">
//                                     <div className="col-sm-4"><b>6% CGST:</b></div>
//                                     <div className="col-sm-8">2035.18</div>
//                                 </div>
//                                 <div className="row bunawat_doc_second_list">
//                                     <div className="col-sm-4"><b>Order Total:</b></div>
//                                     <div className="col-sm-8">INR 37,990,00</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </body>
//     </html>
// );

// const html = ReactDOMServer.renderToStaticMarkup(element);
// Create styles

const html = `
    <html lang="en">
        <body>
            <div style="border: 1px solid #000;">
                <div style="padding: 40px 20px ;">
                    <div style="
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    ">
                        <img src="https://www.doctorsplaza.in/static/media/drplazanew.4676b1446028ae3ba8d8.png" style="
                            width: 150px;
                            height: 70px;
                        " />
                        <div>
                            <h4 style="
                                margin-top: 2px;
                                margin-bottom: 2px;
                                font-weight: 600;
                                font-size: 24px;
                            ">AFPL STORES.COM PVT. LTD</h4>
                            <p style="
                                margin-top: 2px;
                                font-weight: 300;
                                font-size: 16px;
                            ">Shop NO: 44-48, Block No: 2,<br />
                                Busyland Complex<br />
                                Nandgaon Peth Amravati,<br />
                                Maharashtra, 444901 <br />
                                Contact - +9198608000805<br />
                                GSTIN - 27AAVCA3244L1Z6<br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row bunawat_doc_second">
                    <div className="col-sm-6">
                        <div className="row bunawat_doc_second_list">
                            <div className="col-sm-6">
                                <p><span>Billing</span> <br />
                                    Avinash Thakur <br />
                                    Master infotech <br />
                                    12285<br />
                                    mohali<br />
                                    mohali, 160082
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p><span>Shiping</span> <br />
                                    Avinash Thakur <br />
                                    Master infotech <br />
                                    12285<br />
                                    mohali<br />
                                    mohali, <br />
                                    PB 160082
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row bunawat_doc_second_list">
                            <div className="col-sm-4"><span>Invoice Number</span></div>
                            <div className="col-sm-8"><span>: INV/2022-23/1887</span></div>
                        </div>
                        <div className="row bunawat_doc_second_list">
                            <div className="col-sm-4">Order Number</div>
                            <div className="col-sm-8">: 158673</div>
                        </div>
                        <div className="row bunawat_doc_second_list">
                            <div className="col-sm-4">Order Date</div>
                            <div className="col-sm-8">: 10 Nav, 2022</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <table>
                            <tr>
                                <th>Item</th>
                                <th>Cost</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <td>
                                    <b>Blue skirt and top set - Blue,s</b> <br />
                                    <span style={{ fontSize: '14px' }}>sku: LSTS3028-Ylw-BL-1</span>
                                </td>
                                <td>INR 3,299.11</td>
                                <td>x1</td>
                                <td>INR 3,299.11</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Blue skirt and top set - Blue,s</b> <br />
                                    <span style={{ fontSize: '14px' }}>sku: LSTS3028-Ylw-BL-1</span>
                                </td>
                                <td>INR 3,299.11</td>
                                <td>x1</td>
                                <td>INR 3,299.11</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Blue skirt and top set - Blue,s</b> <br />
                                    <span style={{ fontSize: '14px' }}>sku: LSTS3028-Ylw-BL-1</span>
                                </td>
                                <td>INR 3,299.11</td>
                                <td>x1</td>
                                <td>INR 3,299.11</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Blue skirt and top set - Blue,s</b> <br />
                                    <span style={{ fontSize: '14px' }}>sku: LSTS3028-Ylw-BL-1</span>
                                </td>
                                <td>INR 3,299.11</td>
                                <td>x1</td>
                                <td>INR 3,299.11</td>
                            </tr>
                        </table>

                        <div className="row">
                            <div className="col-sm-6"></div>
                            <div className="col-sm-6" style={{ padding: '20px' }}>
                                <div className="row bunawat_doc_second_list">
                                    <div className="col-sm-4"><b>Item Subtotal:</b></div>
                                    <div className="col-sm-8">INR 33,919.64</div>
                                </div>
                                <div className="row bunawat_doc_second_list">
                                    <div className="col-sm-4"><b>6% SGST:</b></div>
                                    <div className="col-sm-8">2035.18</div>
                                </div>
                                <div className="row bunawat_doc_second_list">
                                    <div className="col-sm-4"><b>6% CGST:</b></div>
                                    <div className="col-sm-8">2035.18</div>
                                </div>
                                <div className="row bunawat_doc_second_list">
                                    <div className="col-sm-4"><b>Order Total:</b></div>
                                    <div className="col-sm-8">INR 37,990,00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </html>
`;
const PdfDocument = (data) => {
    return (
        <Document>
            <Page>
                <Html>{html}</Html>
            </Page>
        </Document>
    );
}

export default PdfDocument;