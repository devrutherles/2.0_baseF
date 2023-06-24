export const myLocation = () => {
  let lat = 0;
  let lng = 0;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      if (!position?.coords?.latitude) return;

      const latitude = position?.coords?.latitude;

      const longitude = position?.coords?.longitude;

      setLatitude(latitude);
      setLongitude(longitude);

      dispatch(
        setLocation({
          lat: latitude,
          lng: longitude,
          isLocation: true,
        })
      );

      setActvitie(position?.coords?.latitude);
    });
  }

  return location;
};
