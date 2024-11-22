"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
// 使用 a 标签，每次页面导航时都会出现完整的页面刷新！
import Link from "next/link";
// 获取当前路由路径，但是得使用客户端模式
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            // grow => flex-grow flex 布局下，当前元素的宽度会自动撑满剩余空间
            // flex-shrink => flex-shrink-0 flex 布局下，当前元素宽度不会自动撑满剩余空间，也就是收缩
            // flex-basis => flex-basis-0 flex 布局下，根据值的大小决定当前元素宽度

            // flex: auto || none || initial
            // flex: 2  无单位数字：flex-grow
            // flex: 10em || 30px || min-content  有单位数字：flex-basis
            // flex: 1 30px; 双值：flex-grow | flex-basis
            // flex 2 2; 双值：flex-grow | flex-shrink
            // flex: flex-grow flex-shrink flex-basis

            // gap = row-gap + column-gap 元素之间的间隙宽度

            className={clsx(
              `flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`,
              {
                "bg-sky-100 text-blue-600": pathName === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
