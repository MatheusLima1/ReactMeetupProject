import NewMeetupForm from "../components/meetup/NewMeetupForm";
import {useHistory} from "react-router-dom";

function NewMeetupsPage() {

  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-app-starter-7fd20-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
