import React from 'react';
import TrackerBeeImage from './TrackerBeeImage.jpg';
import logo from "./mlogo.jpg";


function PaymentLog () {
    return (
        <div>
            <form>
                <br/>
                <label for="fname">First Name:  <input type="text" id="fname" name="fname" value="John"/></label>
                <br/>
                <br/>
                <label for="lname">Last Name: <input type="text" id="lname" name="lname" value="Doe"/> </label>
                <br/>
                <br/>
                <br/>
            </form>
            <table width="100%">
                <tr>
                    <th>Date</th>
                    <th>Hours Worked</th>
                    <th>Payment Amount</th> 
                    <th>Payment Number</th>
                    <th>Payment Type</th>
                    <th>Deposit Batch Number</th>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>4567</td>
                    <td>Check</td>
                    <td>119</td>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>8910</td>
                    <td>Check</td>
                    <td>120</td>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>1234</td>
                    <td>Check</td>
                    <td>121</td>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>5678</td>
                    <td>Check</td>
                    <td>122</td>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>9212</td>
                    <td>Check</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>4567</td>
                    <td>Check</td>
                    <td>119</td>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>8910</td>
                    <td>Check</td>
                    <td>120</td>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>1234</td>
                    <td>Check</td>
                    <td>121</td>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>5678</td>
                    <td>Check</td>
                    <td>122</td>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>9212</td>
                    <td>Check</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>4567</td>
                    <td>Check</td>
                    <td>119</td>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>8910</td>
                    <td>Check</td>
                    <td>120</td>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>1234</td>
                    <td>Check</td>
                    <td>121</td>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>5678</td>
                    <td>Check</td>
                    <td>122</td>
                </tr>
                <tr>
                    <td>5/22/2020</td>
                    <td>40</td>
                    <td>$</td>
                    <td>9212</td>
                    <td>Check</td>
                    <td>123</td>
                </tr>
            </table>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default PaymentLog;