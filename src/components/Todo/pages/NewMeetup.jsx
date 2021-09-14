import NewMeetupForm from '../Meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';


const NewMeetup = () => {

    const history = useHistory();

    const onAddMeetup = (meetupData) => {
        fetch('https://localhost-302903-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(()=>{
            history.push('/allmeetup');
        })


    }

    return <section>
        <h3>Add new Meetup</h3>
        <NewMeetupForm onAddMeetup={onAddMeetup} />
    </section>;
}

export default NewMeetup;