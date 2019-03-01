import { withRouter } from 'next/router'

function UserContent(props) {
  return (
    <>
      <p>id: {props.router.query.userId}</p>
      <p>Username: ...</p>
      <p>Age: ...</p>
      <p>Country: ...</p>
    </>
  );
}

export default withRouter(UserContent);