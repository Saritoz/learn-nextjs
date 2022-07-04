import { AppProps } from "next/dist/shared/lib/router/router";
import { NextPage } from "next/types";
import { ReactElement, ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode
}

export type NextPageWithLayout = NextPage & {
    Layout?: (props: LayoutProps) => ReactElement
  }
  
export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  }