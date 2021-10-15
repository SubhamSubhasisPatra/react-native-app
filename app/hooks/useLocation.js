import { useEffect, useState } from "react";
import * as Location from "expo-location";
export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      let { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      let { coords } = await Location.getLastKnownPositionAsync({});
      console.log(coords);
      setLocation({ coords });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
