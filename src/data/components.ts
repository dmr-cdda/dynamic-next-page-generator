import React, { FC } from 'react';
import Bar, { BarProps } from "@/app/components/Bar";
import Foo, { FooProps } from "@/app/components/Foo";
import FooBar, { FoobarProps } from "@/app/components/FooBar";

export type ComponentsType = Record<string, React.ComponentType<any>>

export const components : ComponentsType = {
    foo: Foo,
    bar: Bar,
    fooBar : FooBar
  };