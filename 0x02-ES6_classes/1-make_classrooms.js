import ClassRoom from './0-classroom';

const initializeRooms = () => {
  const arr = [19, 20, 34];

  return arr.map((el) => new ClassRoom(el));
};
export default initializeRooms;
