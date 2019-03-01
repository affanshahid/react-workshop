import Link from 'next/link';
import { Provider } from "react-redux";
import withRedux from 'next-redux-wrapper'
import makeStore from '../store';

const users = [
  { id: 1, name: 'affan' },
  { id: 2, name: 'affan1' },
  { id: 3, name: 'affan2' }
];

function UserLink(props) {
  return (
    <Link href={`/user?userId=${props.id}`} as={`/u/${props.id}`}>
      <div>
        {props.name}
      </div>
    </Link>
  );
}

function Index(props) {
  return (
    <div>
      <Link href="/about">
        <a>
          Go to about page
        </a>
      </Link>
      <br />
      <header>Hello Index</header>
      {
        users.map((user, index) => <div key={index}><UserLink id={user.id} name={user.name} /> </div>)
      }
    </div>
  );
}

export default Index;
