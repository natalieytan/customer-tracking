export const dynamic = 'force-dynamic'; // static by default, unless reading the request
export const runtime = 'nodejs';
 
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export function GET(_request: Request) {
    const fakeTrackingData = {
      trackingNumber: "1234567890",
      status: "In Transit",
      estimatedDelivery: "2024-10-20",
      shipmentDetails: {
        origin: {
          city: "Berlin",
          country: "Germany"
        },
        destination: {
          city: "New York",
          country: "USA"
        },
        weight: "2.5 kg",
        shipmentDate: "2024-10-10",
      },
      events: [
        {
          location: "Berlin, Germany",
          status: "Shipment picked up",
          timestamp: "2024-10-10T09:00:00Z"
        },
        {
          location: "Berlin, Germany",
          status: "Departed from facility",
          timestamp: "2024-10-11T15:30:00Z"
        },
        {
          location: "Frankfurt, Germany",
          status: "Arrived at sorting facility",
          timestamp: "2024-10-12T07:20:00Z"
        },
        {
          location: "Newark, NJ, USA",
          status: "Customs clearance completed",
          timestamp: "2024-10-18T08:10:00Z"
        },
        {
          location: "New York, NY, USA",
          status: "Out for delivery",
          timestamp: "2024-10-19T07:00:00Z"
        }
      ],
      trackingUrl: "https://www.dhl.com/track/1234567890"
    };
  
    return new Response(JSON.stringify(fakeTrackingData), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  