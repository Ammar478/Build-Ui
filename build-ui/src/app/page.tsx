'use client';
import { Card, HeaderTitle } from '../components';
import { PieChartWrapper } from '@/components';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  const [sorted, setSorted] = React.useState<boolean>(false);
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <header className="flex flex-row justify-between">
        <HeaderTitle title="BUILD UI" />
      </header>

      <Link href={'/practices-ui'}>Project ui</Link>

      <Card title={'sss'} description={'dd'} />
    </main>
  );
}
