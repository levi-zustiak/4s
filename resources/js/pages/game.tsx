import { PageTransition } from '@/components/page-transition';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

function Game() {
  return (
    <PageTransition>
      <Head title="Game" />
      <div>
        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
      </div>
    </PageTransition>
  );
}

Game.layout = (page) => <AppLayout>{page}</AppLayout>;

export default Game;
