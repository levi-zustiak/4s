import { PageTransition } from '@/components/page-transition';
import AppLayout from '@/layouts/app-layout';

function Leaderboards() {
  return (
    <PageTransition>
      <h1>Leaderboard</h1>
    </PageTransition>
  );
}

Leaderboards.layout = (page) => <AppLayout>{page}</AppLayout>;

export default Leaderboards;
