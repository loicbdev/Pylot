/* eslint-disable no-console */
import axios from 'axios';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; i += 1) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const convertedVapidKey = urlBase64ToUint8Array(
  process.env.REACT_APP_PUBLIC_VAPID_KEY
);

function sendSubscription(subscription) {
  return axios
    .post(
      `${process.env.REACT_APP_BACKEND_URL}/notifications/subscribe`,
      subscription
    )
    .then(({ data }) => {
      localStorage.setItem('SUBSCRIPTION', JSON.stringify(data.subscription));
    })
    .catch((err) => {
      console.log(err);
    });
}

function subscribeUser() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        if (!registration.pushManager) {
          return;
        }

        registration.pushManager
          .getSubscription()
          .then((existedSubscription) => {
            if (existedSubscription === null) {
              registration.pushManager
                .subscribe({
                  applicationServerKey: convertedVapidKey,
                  userVisibleOnly: true,
                })
                .then((newSubscription) => {
                  sendSubscription(newSubscription);
                })
                .catch((e) => {
                  if (Notification.permission !== 'granted') {
                    console.log('Permission was not granted.');
                  } else {
                    console.error(
                      'An error ocurred during the subscription process.',
                      e
                    );
                  }
                });
            } else {
              sendSubscription(existedSubscription);
            }
          });
      })
      .catch((e) => {
        console.error(
          'An error ocurred during Service Worker registration.',
          e
        );
      });
  }
}

export default subscribeUser;
