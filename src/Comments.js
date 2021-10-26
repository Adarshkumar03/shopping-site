import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Comments = () => {
  return (
    <section className="comments">
      <Comment 
      author="Ifra Ahmed Khan" 
      comment="I ordered a trenchcoat from the fall collection from shopinist. There was such a wide variety to choose from and amazing deals. The delivery was also on time. Totally Satisfactory." 
      country="India"  
      />
      <Comment 
      author="James Taylor" 
      comment="The gym gear I got from Shopinist was really comfy and cool. Highly recommended" 
      country="New Zealand"  
      />
      <Comment 
      author="Grace Williams" 
      comment="I had requested for a replacement for my cardigan which was a size smaller and this guy Jack helped me pickup the right size and made sure I get the replacement as soon as possible." 
      country="Japan"  
      />
    </section>
  );
};

const Comment = ({ author, comment, country }) => {
  return (
    <div className="comment">
      <FontAwesomeIcon icon={faUserCircle}/>
      <h3>{comment}</h3>
      <h4>{author}</h4>
      <p>{country}</p>
    </div>
  );
};

export default Comments;
