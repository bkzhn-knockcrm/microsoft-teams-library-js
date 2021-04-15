import React, { ReactElement } from 'react';
import './App.css';
import { core, appInitialization } from '@microsoft/teamsjs-app-sdk';
import AppInitializationAPIs from './components/AppInitialization';
import AuthenticationAPIs from './components/AuthenticationAPIs';
import CalendarAPIs from './components/CalendarAPIs';
import ChatAPIs from './components/privateApis/ChatAPIs';
import CoreAPIs from './components/CoreAPIs';
import LocationAPIs from './components/LocationAPIs';
import MediaAPIs from './components/MediaAPIs';
import NavigationAPIs from './components/NavigationAPIs';
import PrivateAPIs from './components/PrivateAPIs';
import DialogAPIs from './components/DialogAPIs';
import ConfigAPIs from './components/ConfigAPIs';
import TeamsCoreAPIs from './components/TeamsCoreAPIs';
import MailAPIs from './components/MailAPIs';
import NotificationAPIs from './components/privateApis/NotificationAPIs';
import MeetingAPIs from './components/MeetingAPIs';

core.initialize();

// for AppInitialization tests we need a way to stop the Test App from sending these
// we do it by adding appInitializationTest=true to query string
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('appInitializationTest') && urlParams.get('appInitializationTest')) {
  console.info('Not calling appInitialization because part of App Initialization Test run');
} else {
  appInitialization.notifyAppLoaded();
  appInitialization.notifySuccess();
}

export const noHubSdkMsg = ' was called, but there was no response from the Hub SDK.';

const App = (): ReactElement => {
  return (
    <>
      <AuthenticationAPIs />
      <AppInitializationAPIs />
      <CalendarAPIs />
      <MailAPIs />
      <ChatAPIs />
      <CoreAPIs />
      <LocationAPIs />
      <MediaAPIs />
      <NavigationAPIs />
      <PrivateAPIs />
      <DialogAPIs />
      <ConfigAPIs />
      <TeamsCoreAPIs />
      <NotificationAPIs />
      <MeetingAPIs />
    </>
  );
};

export default App;
