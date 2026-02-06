import { PageTransition } from '@/components/page-transition';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'motion/react';

function FancyButton() {
  return (
    <div className="group relative inline-block">
      <div className="md absolute inset-0 rounded-xl bg-red-500" />
      <Button className="relative" whileHover={{ rotate: -6 }}>
        Fancy Button
      </Button>
    </div>
  );
  // return (
  //   <div className="relative inline-block rounded-lg border-2 border-white bg-red-500">
  //     <motion.div className="h-full w-full bg-blue-500"></motion.div>
  //     <motion.div
  //       whileHover={{ rotate: -8 }}
  //       className="inline-block origin-center"
  //     >
  //       <Button>Content</Button>
  //     </motion.div>
  //   </div>
  // );
}

function Game() {
  return (
    <PageTransition>
      <Head title="Game" />
      <div>
        <Button>Hello world</Button>
        <FancyButton />
      </div>
    </PageTransition>
  );
}

Game.layout = (page) => <AppLayout>{page}</AppLayout>;

export default Game;
