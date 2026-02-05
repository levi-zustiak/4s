import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { AppLayoutProps } from '@/types';
import { AnimatePresence } from 'motion/react';

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
  <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
    <AnimatePresence>{children}</AnimatePresence>
  </AppLayoutTemplate>
);
