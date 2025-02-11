'use client';

import React from 'react';

import { useParams } from 'next/navigation';

import { FileText, GitBranch, Mail, Settings, Users } from 'lucide-react';

import Sidebar from '@/components/common/Sidebar';

export default function CommunityAdminLayout({ children }: { children: React.ReactNode }) {
  const params = useParams<{ slug: string }>();
  const links = [
    // {
    //   href: `/community/${params?.slug}/dashboard`,
    //   label: 'Dashboard',
    //   icon: <Activity className="mr-3 dark:text-gray-300" />,
    // },
    {
      href: `/community/${params?.slug}/settings`,
      label: 'Settings',
      icon: <Settings className="mr-3 dark:text-gray-300" />,
    },
    {
      href: `/community/${params?.slug}/invite`,
      label: 'Invite',
      icon: <Mail className="mr-3 dark:text-gray-300" />,
    },
    {
      href: `/community/${params?.slug}/submissions`,
      label: 'Articles',
      icon: <FileText className="mr-3 dark:text-gray-300" />,
    },
    {
      href: `/community/${params?.slug}/roles`,
      label: 'Roles',
      icon: <Users className="mr-3 dark:text-gray-300" />,
    },
    {
      href: `/community/${params?.slug}/requests`,
      label: 'Requests',
      icon: <GitBranch className="mr-3 dark:text-gray-300" />,
    },
  ];

  return (
    <div className="flex">
      <Sidebar baseHref={`/community/${params?.slug}`} links={links} />
      <main className="ml-10 flex-1 p-4 pl-2 md:ml-64 md:pl-4">{children}</main>
    </div>
  );
}
