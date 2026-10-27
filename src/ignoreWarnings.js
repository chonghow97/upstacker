import {LogBox} from 'react-native';

// react-native-css-interop (NativeWind) touches ImageBackground on import,
// which triggers RN's deprecation warning. Remove once the library updates.
LogBox.ignoreLogs(['ImageBackground is deprecated']);
