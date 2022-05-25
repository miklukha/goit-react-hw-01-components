import { Profile } from './components/Profile';
import { Statistics } from './components/Statistics';
import user from './user.json';
import data from './data.json';

export function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
}
