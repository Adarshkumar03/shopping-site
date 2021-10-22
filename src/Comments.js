const Comments = () => {
  return (
    <section>
      <Comment author="Guy" comment="Just wow." />
      <Comment author="Guy" comment="Just wow." />
      <Comment author="Guy" comment="Just wow." />
    </section>
  );
};

const Comment = ({ author, comment }) => {
  return (
    <div>
      <h1>"</h1>
      <h2>{comment}</h2>
      <h3>{author}</h3>
    </div>
  );
};

export default Comments;
