import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "@firebase/firestore";

const carCollectionRef = collection(db, "cars");

export const addCar = async (newCar) => addDoc(carCollectionRef, newCar);

export const updateCar = async (id, updateCar) =>
  updateDoc(doc(db, "cars", id), updateDoc);

export const deleteCar = async (id) => deleteDoc(doc(db, "cars", id));

export const getCar = async (id) => getDoc(doc(db, "cars", id));

export const getAllCars = async () => getDocs(carCollectionRef);

export const searchCars = async (searchTerm) => {
  const q = query(carCollectionRef, where("body", "==", searchTerm));
  return await getDocs(q);
};
