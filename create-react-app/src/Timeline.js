import withRoot from './modules/withRoot';
import React from 'react';
import './Timeline.css';
import {Icon, Timeline} from 'rsuite';

const TimelineWithTime = ({ align }) => (
  <Timeline align={align}>
    <Timeline.Item time="November 5, 2019 16:27">
      Your order starts processing
    </Timeline.Item>
    <Timeline.Item time="November 5, 2019 18:00">
      Your order to be ready for delivery
    </Timeline.Item>
    <Timeline.Item time="Yesterday 16:28">
      Your parcel has been out of the library
    </Timeline.Item>
    <Timeline.Item time="Today 02:34">
      Send to Shanghai Hongkou Company
    </Timeline.Item>
    <Timeline.Item time="Today 15:05">
      Sending you a piece
    </Timeline.Item>
  </Timeline>
);


function Index() {
  return (
    <Timeline className="custom-timeline">
        <Timeline.Item dot={<Icon icon="credit-card" size="2x" />}>
            <p>March 1, 10:20</p>
            <p>Your order starts processing</p>
        </Timeline.Item>
        <Timeline.Item>
            <p>March 1, 11:34</p>
            <p>The package really waits for the company to pick up the goods</p>
        </Timeline.Item>
        <Timeline.Item>
            <p>March 1, 16:20</p>
            <p>[Packed]</p>
            <p>Beijing company has received the shipment</p>
        </Timeline.Item>
        <Timeline.Item dot={<Icon icon="plane" size="2x" />}>
            <p>March 2, 06:12</p>
            <p>[In transit]</p>
            <p>Order has been shipped from Beijing to Shanghai</p>
        </Timeline.Item>
        <Timeline.Item dot={<Icon icon="truck" size="2x" />}>
            <p>March 2, 09:20</p>
            <p>[In transit]</p>
            <p>
                Sended from the Shanghai Container Center to the distribution center
            </p>
        </Timeline.Item>
        <Timeline.Item dot={<Icon icon="user" size="2x" />}>
            <p>March 3, 14:20</p>
            <p>[Delivery]</p>
            <p>
                Shanghai Hongkou District Company Deliverer: Mr. Li, currently sending
                you a shipment
            </p>
        </Timeline.Item>
        <Timeline.Item
            dot={
                <Icon
                    icon="check"
                    size="2x"
                    style={{ background: '#15b215', color: '#fff' }}
                />
            }
        >
        <p>March 3, 17:50</p>
        <p>[Received]]</p>
        <p>Your courier has arrived and the signer is the front desk</p>
        </Timeline.Item>
    </Timeline>
  );
}

export default withRoot(Index);
