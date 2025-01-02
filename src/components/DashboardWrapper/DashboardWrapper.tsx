import type React from 'react';
import { Suspense } from 'react';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Main } from '@/components/Main/Main';
import { Appbar } from '@/components/Appbar/Appbar';

interface DashboardWrapperProps {
  component: React.FC<any>;
}

export const DashboardWrapper: React.FC<DashboardWrapperProps> = (props) => {
  const { component: Component } = props;

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[280px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Appbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Main component={Component} />
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardWrapper;
