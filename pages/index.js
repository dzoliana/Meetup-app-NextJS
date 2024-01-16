import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://croti.blog/wp-content/uploads/2023/06/DSC02323.webp",
    adress: "Some adress 10, 21000 Split",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://2021-radial-youth.eurilca-europeans.org/wp-content/uploads/sites/11/2021/01/Kastela_01.jpg",
    adress: "Some adress 25, 21217 Kaštela",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

export async function getStaticProps() {
  //fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
