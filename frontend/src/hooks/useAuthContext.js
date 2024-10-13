import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(AuthContext);
  if(!context){
    throw Error('useWorkoutContext must be used inside a AuthContextProvider')
  }
   
  return context
};
