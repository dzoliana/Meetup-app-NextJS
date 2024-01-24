import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

/* const DUMMY_MEETUPS = [
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
]; */

function HomePage(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

/* export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  //fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
} */

export async function getStaticProps() {
  //fetch data from API

  /* const client = await MongoClient.connect(
    "mongodb+srv://<username>:<password>@cluster0.hsckvsf.mongodb.net/meetups?retryWrites=true&w=majority"
  ); */
  /* const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray(); */

  const user = process.env.DB_USER;
  const password = process.env.DB_PASS;

  const client = await MongoClient.connect(
    `mongodb+srv://${user}:${password}@cluster0.hsckvsf.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection(`${process.env.DB_COLLECTION}`);
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
