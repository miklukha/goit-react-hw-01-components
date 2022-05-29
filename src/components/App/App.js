import { Section, Container } from 'components/App/App.styled';
import { Profile } from '../Profile';
import { Statistics } from '../Statistics';
import { FriendList } from '../FriendList';
import { TransactionHistory } from '../TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

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
