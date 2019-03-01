import { withRouter } from 'next/router';

function Post(props) {
  return (
    <div>
      <h1>{props.router.query.title}</h1>
      <p>Some Text</p>
    </div>
  );
}

export default withRouter(Post);
