import Link from 'next/link';

function PostLink(props) {
  return (
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  );
}

export default function Index() {
  return (
    <div>
      <PostLink title="Affan Shahid" />
      <PostLink title="How to kill people" />
      <h1>Hello Next.JS</h1>
    </div>
  );
}
