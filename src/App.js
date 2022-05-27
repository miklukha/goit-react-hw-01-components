import { Section } from './components/Section';
import { Container } from './components/Container';
import { Profile } from './components/Profile';
import { Statistics } from './components/Statistics';
import { FriendList } from './components/FriendList';
import { TransactionHistory } from './components/TransactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export function App() {
  return (
    <>
      <Section>
        <Container>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <Statistics title="Upload stats" stats={data} />
          <Statistics stats={data} />
        </Container>
      </Section>
      <Section>
        <Container>
          <FriendList friends={friends} />
        </Container>
      </Section>
      <Section>
        <Container>
          <TransactionHistory transactions={transactions} />
        </Container>
      </Section>
      ;
    </>
  );
}
