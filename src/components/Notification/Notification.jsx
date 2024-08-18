import'./Notification.module.css'
export default function Notification({ total }) {
  if (total === 0) {
    return <p className='NotificationText'>No feedback yet</p>;
  }
  return null;
}   