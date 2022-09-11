import * as React from 'react';
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from '@mantine/notifications';
import useStyles from "./index.css";
import useGlobalStore from "@/store/global";

export interface MantContainerProps {
  children?: React.ReactNode
}

const MantContainer: React.FunctionComponent<MantContainerProps> = (props) => {
  const { themeMode } = useGlobalStore();

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: themeMode,
        primaryColor: "pink",
      }}
    >
      <NotificationsProvider position="top-right" >
        { props.children }
      </NotificationsProvider>
    </MantineProvider>
  );
};


export default React.memo(MantContainer)