import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const usersCollection = firestore().collection('Users');

export const confirmCode = async (number) =>
  await auth().signInWithPhoneNumber(number);

export const signInWithEmailAndPassword = async (email, password) =>
  await auth().signInWithEmailAndPassword(email, password);

export const setUserEmailPassword = async (email, password) => {
  try {
    await auth().currentUser.updateEmail(email);
    await auth().currentUser.updatePassword(password);
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (
  user,
  id,
  firstName,
  lastName,
  number,
  email,
  zipCode,
  favoriteGolfer,
  nickname,
) => {
  const createUser = await user.doc(id);
  console.log('createUser => ', createUser);
  createUser.set({
    firstName,
    lastName,
    number,
    email,
    zipCode,
    favoriteGolfer,
    nickname,
  });
};
