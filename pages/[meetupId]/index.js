import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://croti.blog/wp-content/uploads/2023/06/DSC02323.webp"
      title="A First Meetup"
      address="Some Street 10, Some City"
      description="This is the first meetup"
    />
  );
}
export default MeetupDetails;
