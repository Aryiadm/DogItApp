
export const getNotificationsFromStorage = () => {
  const notifications = localStorage.getItem('notifications');
  return notifications ? JSON.parse(notifications) : [];
};

export const saveNotificationsToStorage = (notifications) => {
  localStorage.setItem('notifications', JSON.stringify(notifications));
};

export const addNotification = (newNotification) => {
  const notifications = getNotificationsFromStorage();
  newNotification.id = Date.now();
  notifications.push(newNotification);
  saveNotificationsToStorage(notifications);
};

const notifications = [
];

export const clearNotificationsFromStorage = () => {
  localStorage.removeItem('notifications');
};


if (!localStorage.getItem('notifications')) {
  saveNotificationsToStorage(notifications);
}