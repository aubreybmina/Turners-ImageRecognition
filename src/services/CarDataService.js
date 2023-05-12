import { db } from "./firebase";
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
  or,
} from "@firebase/firestore";

const carCollectionRef = collection(db, "cars");

export const addCar = async (newCar) => addDoc(carCollectionRef, newCar);

export const updateCar = async (id, updateCar) =>
  updateDoc(doc(db, "cars", id), updateDoc);

export const deleteCar = async (id) => deleteDoc(doc(db, "cars", id));

export const getCar = async (id) => getDoc(doc(db, "cars", id));

export const getAllCars = async () => getDocs(carCollectionRef);

export const searchCars = async (body) => {
  const q = query(carCollectionRef, where("body", "==", body.toLowerCase()));
  return await getDocs(q);
};

export const searchCarsByBodyModelBrand = async (brand, model, body) => {
  const q = query(
    carCollectionRef,
    or(
      where("body", "==", body.toLowerCase()),
      where("model", "==", model.toLowerCase()),
      where("brand", "==", brand.toLowerCase())
    )
  );
  return await getDocs(q);
};
