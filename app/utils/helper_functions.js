export const isMobile = () => typeof window !== 'undefined' && window.innerWidth <= 768;

export const onSetFullscreen = (ref) => {
  if (ref.current.requestFullscreen) {
    ref.current.requestFullscreen();
    return;
  } else if (ref.current.mozRequestFullScreen) {
    ref.current.mozRequestFullScreen(); // Firefox
    return;
  } else if (ref.current.webkitRequestFullscreen) {
    ref.current.webkitRequestFullscreen(); // Chrome and Safari
    return;
  }
};

export const dateToLocale = (date) => new Date(Date.parse(date)).toLocaleDateString("en-US", {year: 'numeric', month: 'short', day: 'numeric' });

export const formatCartData = (cart) => {
  const partitionedCart = {};
  const forMattedCart = [];
  let sum = 0.00;
  if (cart) {
    cart.forEach((item, i) => {
      let deliveryWindow;
      if (item.delivery_window_start) {
        const formattedStart = dateToLocale(item.delivery_window_start);
        const formattedEnd = dateToLocale(item.delivery_window_end);
        deliveryWindow = `${formattedStart} - ${formattedEnd}`;
      } else {
        deliveryWindow = `${i} - no date available`;
      }
      if (!partitionedCart[deliveryWindow]) {
        partitionedCart[deliveryWindow] = []
      }
      partitionedCart[deliveryWindow].push(item);
      sum += Number(item.whole_sale_price);
    })
    Object.keys(partitionedCart).forEach((key) => {
      const deliveryObj = {
        id: 'this should be a shipment id at some point',
        deliveryWindow: key,
        items: partitionedCart[key]
      }
      forMattedCart.push(deliveryObj);
    })
  }
  return {
    sum: sum, 
    shipMents: forMattedCart
  }
};

export const convertTimeToPercentage = (time, videoDuration) => {
  if (!videoDuration || !time) return 0;
  // expects HH:MM:SS format
  const a = time.split(':');

  // minutes are worth 60 seconds. Hours are worth 60 minutes.
  const seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
  const percentage = seconds / videoDuration * 100;
  return percentage
}