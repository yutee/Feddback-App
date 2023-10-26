import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types';
import Card from './shared/Card';

function FeedbackItem({ item, handleDelete }) {

  // const handleClick = () => {
  //   // Updating a state, you do not just reassign it,
  //   // states in react are immutable, you have to reset it by callling 
  //   // setRating() '(in this case)'

  //   // using a fucntion  and the return keyword is useful to preserve 
  //   // the previous value of the state, done with second button

  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  // }

  return (
    <Card >
      <div className = 'num-display'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color='purple '/>
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem


// the use of States on react was first learnt on this file
