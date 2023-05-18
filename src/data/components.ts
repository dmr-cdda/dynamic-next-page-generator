import React from 'react';
import Bar from "@/app/components/Bar";
import Foo from "@/app/components/Foo";
import FooBar from "@/app/components/FooBar";
import Layout from '@/app/components/Layout';
import Navbar from '@/app/components/Navbar';
import Empty from '@/app/components/Empty';
import Content from '@/app/components/Content';

export type ComponentsType = Record<string, React.ComponentType<any>>

export const components : ComponentsType = {
    foo: Foo,
    bar: Bar,
    fooBar: FooBar,
    layout: Layout,
    navbar: Navbar,
    content : Content,
    empty : Empty
  };